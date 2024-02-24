"use client";
import usePlayButtonClick from "@/hooks/usePlayButtonClick";
import { RootState } from "@/redux/store";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import PlayButton from "../home/PlayButton";

type Props = {
  image: StaticImageData;
  title: string;
  views: number;
  song: string;
  subTitle: string;
};

const PodcastCard = ({ image, title, views, song, subTitle }: Props) => {
  const { handlePlayButtonClick } = usePlayButtonClick();

  const audioTrack = useSelector((state: RootState) => state.track);

  const audio = audioTrack?.url;
  const isPlaying = audioTrack?.isPlaying;

  return (
    <div className="trending__item round16 p-8 play-button-container">
      <div className="thumb ralt overhid transition">
        <Image src={image} className="transition h-auto" alt="img" />
        <PlayButton
          audioTrack={audio === song}
          isPlaying={isPlaying}
          onClick={() => handlePlayButtonClick(song)}
        />
        <div className="podcast__viwer d-flex align-items-center justify-content-between">
          <span className="live fs-16 bodyfont white">LIve</span>
          <span className="viewer fs-16 bodyfont white">{views}k Viewers</span>
        </div>
        <div className="artist__popup d-flex align-items-center justify-content-between">
          <div className="content">
            <h5 className="mb-1">
              <Link href="podcast-allsong" className="white">
                {title}
              </Link>
            </h5>
            <span className="fs-16 fw-500 pra3 d-block">{subTitle}</span>
          </div>
          <Link href="podcast-allsong" className="cmn__arrow">
            <IconArrowNarrowRight className="arrowrotate" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
