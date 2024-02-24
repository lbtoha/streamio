"use client";
import usePlayButtonClick from "@/hooks/usePlayButtonClick";
import { RootState } from "@/redux/store";
import { IconMessageMinus } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import PlayButton from "./PlayButton";

type Props = {
  image: StaticImageData;
  date: string;
  comment: number;
  title: string;
  type: string;
  song: string;
};
const LatestPostCard = ({ image, date, comment, title, type, song }: Props) => {
  const { handlePlayButtonClick } = usePlayButtonClick();

  const audioTrack = useSelector((state: RootState) => state.track);

  const audio = audioTrack?.url;
  const isPlaying = audioTrack?.isPlaying;

  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 play-button-container">
      <div className="latest__item overhid ralt">
        <div className="thumb ralt mb-16 transition overhid">
          <Image
            src={image}
            className="w-100 transition overhid h-auto"
            alt="img"
          />
          <PlayButton
            audioTrack={audio === song}
            isPlaying={isPlaying}
            onClick={() => handlePlayButtonClick(song)}
          />
          <Link href="#" className="l__badge">
            {type}
          </Link>
        </div>
        <div className="content">
          <div className="d-flex align-items-center justify-content-between">
            <span className="cmn__date ralt fw-500 bodyfont fs-14 base2 d-block mb-16">
              {date}
            </span>
            <Link
              href="#"
              className="d-flex white w-500 bodyfont align-items-center gap-3"
            >
              <IconMessageMinus className="base fs-20" />
              {comment}
            </Link>
          </div>
          <h4>
            <Link href="blog-details" className="white">
              {title}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LatestPostCard;
