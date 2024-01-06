"use client";
// SoundCloudPlayer.tsx
import React, { useEffect, useState } from "react";

interface TrackInfo {
  title: string;
  stream_url: string;
}

interface SoundCloudPlayerProps {
  trackUrl?: string;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({
  trackUrl = "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
}) => {
  const [trackInfo, setTrackInfo] = useState<TrackInfo>({
    title: "",
    stream_url: "",
  });
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fetching data from SoundCloud API if needed
    // For now, we're using default values or provided trackUrl
    // Remove comments and use axios if actual API calls are required
    /*
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.soundcloud.com/resolve?url=${trackUrl}&client_id=YOUR_SOUNDCLOUD_API_KEY`
        );

        setTrackInfo(response.data);
      } catch (error) {
        console.error("Error fetching track details:", error);
      }
    };

    fetchData();
    */
  }, [trackUrl]);

  const handlePlay = () => {
    if (audio) {
      audio.play();
    }
  };

  const handlePause = () => {
    if (audio) {
      audio.pause();
    }
  };

  const handleStop = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const handleTimeUpdate = () => {
    if (audio) {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const calculatedProgress = (currentTime / duration) * 100;
      setProgress(calculatedProgress);
    }
  };

  return (
    <div className="customAudioPlayer">
      <div className="controls">
        <button className="controlButton" onClick={handlePlay}>
          Play
        </button>
        <button className="controlButton" onClick={handlePause}>
          Pause
        </button>
        <button className="controlButton" onClick={handleStop}>
          Stop
        </button>
      </div>
      <div className="progressContainer">
        <progress value={progress} max="100" className="progressBar" />
      </div>
      <audio
        ref={(audioRef) => {
          setAudio(audioRef);
          if (audioRef) {
            audioRef.addEventListener("timeupdate", handleTimeUpdate);
          }
        }}
        src={trackUrl}
        controls={false} // Hide default controls
        className="audioElement"
      />
    </div>
  );
};

export default SoundCloudPlayer;
