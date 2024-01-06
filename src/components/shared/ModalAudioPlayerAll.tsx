"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import {
  IconMultiplier1x,
  IconPlayerSkipForward,
  IconPlaylist,
  IconRepeat,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ModalAudioPlayerAll = ({ audio }: { audio?: string }) => {
  const {
    playToggle,
    audioRef,
    progressBarRef,
    progress,
    duration,
    currentTime,
    isSeeking,
    handlePlayToggle,
    handleProgress,
    setPlayToggle,
    seekToTime,
    handleFastReverse,
    handleFastForward,
    handleProgressBarMouseDown,
    handleProgressBarMouseUp,
    handleProgressBarInteraction,
    handleProgressBarMouseMove,
    handleProgressBarMouseLeave,
  } = useAudioPlayer();

  // formate the duration in second
  const [durationInMin, setDurationInMin] = useState("");
  const [currentInMin, setCurrentInMin] = useState("");

  useEffect(() => {
    const minutes: number = Math.floor(currentTime / 60);
    const remainingSeconds: number = Math.floor(currentTime % 60);
    const newCurrent = `${minutes}:${remainingSeconds} `.replace(
      /:0(\d) min$/,
      ":$1 min"
    );
    setCurrentInMin(newCurrent);
  }, [currentTime, audio]);

  useEffect(() => {
    const minutes: number = Math.floor(duration / 60);
    const remainingSeconds: number = Math.floor(duration % 60);
    const newDuration = `${minutes}:${remainingSeconds} `.replace(
      /:0(\d) min$/,
      ":$1 min"
    );
    setDurationInMin(newDuration);
  }, [duration, audio]);

  //   =========================

  // State for volume control
  const [volume, setVolume] = useState(1);
  const vref = useRef<HTMLDivElement | null>(null);

  const handleVolumeChange = (event: React.MouseEvent<HTMLDivElement>) => {
    const progressBarv = vref.current;

    if (progressBarv) {
      const rect = progressBarv.getBoundingClientRect();
      const clickPosition = event.clientX - rect.left;

      // Calculate the new volume based on the click position and progress bar width
      const newVolume = clickPosition / rect.width;

      // Set the new volume in state
      setVolume(newVolume);
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
      }
    }
  };

  return (
    <>
      <div className="d-flex middle__audioboxes align-items-center">
        <div className="d-flex align-items-center switch">
          {/* <Link href="#0" className="white">
            <IconSwitch />
          </Link>
          <Link href="#0" className="white lefttrun">
            <IconPlayerSkipBack />
          </Link> */}
        </div>
        <div className={`audioplayer ${playToggle && "audioplayer-playing"}`}>
          <audio
            preload="auto"
            style={{ width: "0px", height: "0px", visibility: "hidden" }}
            onTimeUpdate={handleProgress}
            ref={audioRef}
          >
            <source src={audio} />
          </audio>
          <div
            onClick={handlePlayToggle}
            className="audioplayer-playpause"
            title=""
          >
            <Link href="#"></Link>
          </div>
          <div className="audioplayer-time audioplayer-time-current">
            {currentInMin}
          </div>
          <div
            ref={progressBarRef}
            onClick={handleProgressBarInteraction}
            onMouseDown={handleProgressBarMouseDown}
            onMouseUp={handleProgressBarMouseUp}
            onMouseMove={handleProgressBarMouseMove}
            onMouseLeave={handleProgressBarMouseLeave}
            className="audioplayer-bar"
          >
            <div
              className="audioplayer-bar-loaded"
              style={{ width: "100%" }}
            ></div>
            <div
              className="audioplayer-bar-played"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="audioplayer-time audioplayer-time-duration">
            {durationInMin}
          </div>
          <div className="audioplayer-volume">
            <div className="audioplayer-volume-button" title="">
              <Link href="#"></Link>
            </div>
            <div
              ref={vref}
              onClick={handleVolumeChange}
              className="audioplayer-volume-adjust"
            >
              <div>
                <div style={{ width: volume * 100 + "%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <Link href="#0" className="white righttrun">
          <IconPlayerSkipForward className="pra" />
        </Link>
        <Link href="#0" className="white righttrun">
          <IconRepeat className="pra" />
        </Link>
      </div>
      <div className="d-flex small__center align-items-center">
        <Link href="#0" className="white">
          <IconMultiplier1x className="pra circle__add" />
        </Link>
        <Link href="#0" className="white">
          <IconPlaylist className="fs-20 pra" />
        </Link>
        <button
          type="button"
          className="btn pra cross__btnsnone"
          data-bs-dismiss="modal"
          aria-label="button"
        >
          <IconX className="fs-24" />
        </button>
      </div>
    </>
  );
};

export default ModalAudioPlayerAll;
