"use client";
import usePlayButtonClick from "@/hooks/usePlayButtonClick";
import { RootState } from "@/redux/store";
import Image, { StaticImageData } from "next/image";
import { useSelector } from "react-redux";
import PlayButton from "../home/PlayButton";

type Props = {
  image: StaticImageData;
  title: string;
  singer: string;
  song: string;
};
const WeeklyTopTrack = ({ image, title, singer, song }: Props) => {
  const { handlePlayButtonClick } = usePlayButtonClick();

  const audioTrack = useSelector((state: RootState) => state.track);

  const audio = audioTrack?.url;
  const isPlaying = audioTrack?.isPlaying;
  return (
    <li className="d-flex align-items-center justify-content-between ">
      <div className="d-flex gap-2 align-items-center">
        <Image width={56} height={56} src={image} alt="img" />
        <span className="content">
          <span className="fs-16 d-block mb-1 fw-500 white bodyfont">
            {title}
          </span>
          <span className="fs-12 fw-400 bodyfont pra d-block">{singer}</span>
        </span>
      </div>
      <PlayButton
        audioTrack={audio === song}
        isPlaying={isPlaying}
        onClick={() => handlePlayButtonClick(song)}
      />
    </li>
  );
};

export default WeeklyTopTrack;
