"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { handleLinkClick } from "@/utils/handleLinkClick";
import Link from "next/link";
import { useEffect, useState } from "react";

const AudioPlayer = ({ audio = "../audio/audio.mp3" }: { audio?: string }) => {
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

  return (
    <div className="pause__block pause__abs pt-2 pb-1">
      <div className={`audioplayer ${playToggle && "audioplayer-playing"}`}>
        <audio
          preload="auto"
          controls
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
          <Link href="#" onClick={handleLinkClick}></Link>
        </div>
        <div className="audioplayer-time audioplayer-time-current">
          {currentTime}
        </div>
        <div
          className="audioplayer-bar"
          ref={progressBarRef}
          onClick={handleProgressBarInteraction}
          onMouseDown={handleProgressBarMouseDown}
          onMouseUp={handleProgressBarMouseUp}
          onMouseMove={handleProgressBarMouseMove}
          onMouseLeave={handleProgressBarMouseLeave}
        >
          <div
            className="audioplayer-bar-loaded"
            style={{ width: "102%" }}
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
            <Link href="#" onClick={handleLinkClick}></Link>
          </div>
          <div className="audioplayer-volume-adjust">
            <div>
              <div style={{ width: "100%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
