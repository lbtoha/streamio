"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { useEffect, useRef, useState } from "react";

const ModalAudioPlayer = ({
  audio = "http://physical-authority.surge.sh/music/2.mp3",
}: {
  audio?: string;
}) => {
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
      console.log(clickPosition);

      // Calculate the new volume based on the click position and progress bar width
      const newVolume = clickPosition / rect.width;
      console.log(newVolume);
      // Set the new volume in state
      setVolume(newVolume);

      if (audioRef.current) {
        audioRef.current.volume = newVolume;
      }
    }
  };
  console.log(volume);

  return (
    <>
      <div className="d-flex middle__audioboxes align-items-center">
        <div className="d-flex align-items-center switch">
          <a href="#0" className="white">
            <i className="ti ti-switch"></i>
          </a>
          <a href="#0" className="white lefttrun">
            <i className="ti ti-player-skip-back"></i>
          </a>
        </div>
        <div className={`audioplayer ${playToggle && "audioplayer-playing"}`}>
          <audio
            preload="auto"
            controls=""
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
            <a href="#"></a>
          </div>
          <div className="audioplayer-time audioplayer-time-current">
            {currentTime}
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
              <a href="#"></a>
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
        <a href="#0" className="white righttrun">
          <i className="ti ti-player-skip-forward pra"></i>
        </a>
        <a href="#0" className="white righttrun">
          <i className="ti ti-repeat pra"></i>
        </a>
      </div>
      <div className="d-flex small__center align-items-center">
        <a href="#0" className="white">
          <i className="ti ti-multiplier-1x pra circle__add"></i>
        </a>
        <a href="#0" className="white">
          <i className="ti ti-playlist fs-20 pra"></i>
        </a>
        <button
          type="button"
          className="btn pra cross__btnsnone"
          data-bs-dismiss="modal"
        >
          <i className="ti ti-x fs-24"></i>
        </button>
      </div>
    </>
  );
};

export default ModalAudioPlayer;