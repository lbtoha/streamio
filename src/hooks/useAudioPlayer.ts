import { useEffect, useRef, useState } from "react";

const useAudioPlayer = () => {
  const [playToggle, setPlayToggle] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isSeeking, setIsSeeking] = useState<boolean>(false);

  const handlePlayToggle = () => {
    setPlayToggle(!playToggle);
    if (audioRef.current) {
      if (playToggle) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handlePlay = () => {
    setPlayToggle(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    setPlayToggle(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleProgress);

      return () => {
        audio.removeEventListener("timeupdate", handleProgress);
      };
    }
  }, []);

  const handleProgress = () => {
    const audio = audioRef.current;
    if (audio) {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const progressPercentage = (currentTime / duration) * 100;

      if (currentTime === duration) {
        setPlayToggle(false);
      }
      setCurrentTime(currentTime);
      setDuration(duration);
      setProgress(progressPercentage);
    }
  };

  const seekToTime = (time: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = time;
    }
  };

  const handleFastReverse = () => {
    seekToTime(currentTime - 10);
  };

  const handleFastForward = () => {
    seekToTime(currentTime + 10);
  };

  const handleProgressBarMouseDown = () => {
    setIsSeeking(true);
  };

  const handleProgressBarMouseUp = () => {
    if (isSeeking) {
      setIsSeeking(false);
    }
  };

  const handleProgressBarInteraction = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const progressBar = progressBarRef.current;
    if (progressBar) {
      const rect = progressBar.getBoundingClientRect();
      const newProgress = ((event.clientX - rect.left) / rect.width) * 100;
      const timeToSeek = (newProgress / 100) * duration;

      setCurrentTime(timeToSeek);

      // Seek to the calculated time using the 'seekToTime' function
      seekToTime(timeToSeek);
    }
  };

  const handleProgressBarMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isSeeking) {
      const progressBar = progressBarRef.current;
      if (progressBar) {
        const rect = progressBar.getBoundingClientRect();
        const newProgress = ((event.clientX - rect.left) / rect.width) * 100;
        const timeToSeek = (newProgress / 100) * duration;

        setCurrentTime(timeToSeek);

        // Seek to the calculated time using the 'seekToTime' function
        seekToTime(timeToSeek);
      }
    }
  };

  const handleProgressBarMouseLeave = () => {
    if (isSeeking) {
      setIsSeeking(false);
    }
  };

  return {
    playToggle,
    handlePause,
    audioRef,
    progressBarRef,
    progress,
    duration,
    currentTime,
    isSeeking,
    handlePlayToggle,
    handlePlay,
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
  };
};

export default useAudioPlayer;
