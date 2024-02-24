"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { setCustomModal } from "@/redux/features/modalSlice";
import { setTrack } from "@/redux/features/trackSlice";
import { RootState } from "@/redux/store";
import { handleLinkClick } from "@/utils/handleLinkClick";
import {
  IconMultiplier1x,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
  IconPlaylist,
  IconRepeat,
  IconSwitch,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalAudioPlayer = () => {
  const dispatch = useDispatch();
  const audioTrack = useSelector((state: RootState) => state.track);
  const audio = audioTrack.url;
  const isPlaying = audioTrack.isPlaying;

  const {
    playToggle,
    handlePause,
    handlePlay,
    audioRef,
    progressBarRef,
    progress,
    duration,
    currentTime,
    isSeeking,
    setPlayToggle,
    handlePlayToggle,
    handleProgress,
    handleFastReverse,
    handleFastForward,
    handleProgressBarMouseDown,
    handleProgressBarMouseUp,
    handleProgressBarInteraction,
    handleProgressBarMouseMove,
    handleProgressBarMouseLeave,
  } = useAudioPlayer();

  const handleModalClose = () => {
    dispatch(setCustomModal(false));
    handlePause();
    dispatch(setTrack({ url: audio, isPlaying: false }));
  };

  useEffect(() => {
    if (audio && isPlaying) {
      handlePlay();
    }
  }, [audio]);

  useEffect(() => {
    if (!isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  }, [isPlaying]);

  const handleAudioPlay = () => {
    if (!isPlaying) {
      dispatch(setTrack({ url: audio, isPlaying: true }));
      handlePlayToggle();
    } else {
      handlePause();
      dispatch(setTrack({ url: audio, isPlaying: false }));
    }
  };

  // formate the duration in second
  const [durationInMin, setDurationInMin] = useState("");
  const [currentInMin, setCurrentInMin] = useState("");

  useLayoutEffect(() => {
    const minutes: number = Math.floor(currentTime / 60);
    const remainingSeconds: number = Math.floor(currentTime % 60);
    const newCurrent = `${minutes}:${remainingSeconds} `.replace(
      /:0(\d) min$/,
      ":$1 min"
    );
    setCurrentInMin(newCurrent);

    if (currentInMin === durationInMin) {
      dispatch(setTrack({ url: audio, isPlaying: false }));
    }
  }, [currentTime, audio]);

  useEffect(() => {
    const minutes: number = Math.floor(duration / 60);
    const remainingSeconds: number = Math.floor(duration % 60);
    if (Number.isNaN(minutes)) {
      setCurrentInMin("0:00");
    } else {
      const newDuration = `${minutes}:${remainingSeconds} `.replace(
        /:0(\d) min$/,
        ":$1 min"
      );
      setDurationInMin(newDuration);
    }
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
        <div className="d-flex align-items-center  modal-switch">
          <Link href="#0" className="white" onClick={handleLinkClick}>
            <IconSwitch />
          </Link>
          <Link
            href="#0"
            className="white lefttrun"
            onClick={(e) => {
              handleLinkClick(e), handleFastReverse();
            }}
          >
            <IconPlayerSkipBack />
          </Link>
        </div>
        <div className={`audioplayer ${playToggle && "audioplayer-playing"}`}>
          <audio
            preload="auto"
            style={{ width: "0px", height: "0px", visibility: "hidden" }}
            onTimeUpdate={handleProgress}
            ref={audioRef}
            src={`${audio}`}
          ></audio>

          <button onClick={handleAudioPlay} className="audioplayer-playpause">
            {isPlaying ? <IconPlayerPauseFilled /> : <IconPlayerPlayFilled />}
          </button>

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
        <Link
          href="#0"
          className="white righttrun-one"
          onClick={(e) => {
            handleLinkClick(e), handleFastForward();
          }}
        >
          <IconPlayerSkipForward className="pra" />
        </Link>
        <Link href="#0" className="white righttrun-two">
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
        <button className="btn pra cross__btnsnone" onClick={handleModalClose}>
          <IconX className="fs-24" />
        </button>
      </div>
    </>
  );
};

export default ModalAudioPlayer;
