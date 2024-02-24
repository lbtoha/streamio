"use client";
import usePlayButtonClick from "@/hooks/usePlayButtonClick";
import { RootState } from "@/redux/store";
import { IconPlaylist } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import PlayButton from "../home/PlayButton";

type Props = {
  image: StaticImageData;
  title: string;
  subTitle: number;
  song: string;
  link: string;
};
const GenresSliderCard = ({ image, title, subTitle, song, link }: Props) => {
  const { handlePlayButtonClick } = usePlayButtonClick();

  const audioTrack = useSelector((state: RootState) => state.track);

  const audio = audioTrack?.url;
  const isPlaying = audioTrack?.isPlaying;

  return (
    <div className="moods__item genres__song play-button-container">
      <div className="thumb ralt mb-16 transition overhid">
        <Image
          src={image}
          className="w-100 round50 transition overhid h-auto flex-shrink-0"
          alt="img"
        />
        <PlayButton
          audioTrack={audio === song}
          isPlaying={isPlaying}
          onClick={() => handlePlayButtonClick(song)}
        />
      </div>
      <div className="content">
        <h5 className="mb-2">
          <Link href={link} className="white">
            {title}
          </Link>
        </h5>
        <Link
          href="genres-details"
          className="d-flex fs-14 bodyfont fw-500 pra align-items-center gap-2"
        >
          <IconPlaylist className="playlist fs-24" />
          {subTitle}
        </Link>
      </div>
    </div>
  );
};

export default GenresSliderCard;
