"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";

const AudioPlayer = ({
  audio = "http://physical-authority.surge.sh/music/2.mp3",
}: {
  audio?: string;
}) => {
  const { playToggle, audioRef, handlePlayToggle, handleProgress } =
    useAudioPlayer();
  return (
    <div className="pause__block pause__abs">
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
          <a href="javascript:;"></a>
        </div>
        <div className="audioplayer-time audioplayer-time-current">00:00</div>
        <div className="audioplayer-bar">
          <div
            className="audioplayer-bar-loaded"
            style={{ width: "95.7206%" }}
          ></div>
          <div className="audioplayer-bar-played"></div>
        </div>
        <div className="audioplayer-time audioplayer-time-duration">03:21</div>
        <div className="audioplayer-volume">
          <div className="audioplayer-volume-button" title="">
            <a href="#"></a>
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
