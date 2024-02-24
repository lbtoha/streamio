"use client";
import usePlayButtonClick from "@/hooks/usePlayButtonClick";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import PlayButton from "../home/PlayButton";

const BlogDetailsThumb = () => {
  const { handlePlayButtonClick } = usePlayButtonClick();
  const song =
    "https://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg";

  const audioTrack = useSelector((state: RootState) => state.track);

  const audio = audioTrack?.url;
  const isPlaying = audioTrack?.isPlaying;
  return (
    <div className="thumb ralt mb-16 transition overhid play-button-container">
      <Image
        width={942}
        height={509}
        src="/img/blog/blgo-big1.jpg"
        className="w-100 transition overhid h-auto"
        alt="img"
      />
      <PlayButton
        audioTrack={audio === song}
        isPlaying={isPlaying}
        onClick={() => handlePlayButtonClick(song)}
      />
      <Link href="#0" className="l__badge">
        Features
      </Link>
    </div>
  );
};

export default BlogDetailsThumb;
