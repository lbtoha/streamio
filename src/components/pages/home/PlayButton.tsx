import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";

const PlayButton = ({
  onClick,
  isPlaying,
  audioTrack,
}: {
  onClick: () => void;
  isPlaying: boolean;
  audioTrack: boolean;
}) => {
  return (
    <button className="button-play" onClick={onClick}>
      {isPlaying && audioTrack ? (
        <IconPlayerPauseFilled />
      ) : (
        <IconPlayerPlayFilled />
      )}
    </button>
  );
};

export default PlayButton;
