"use client";
import AudioPlayer from "@/components/shared/AudioPlayer";
import { IconHeadphones, IconListTree } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  title: string;
  location: string;
  listeners: number;
};
const TrendingSliderCard = ({ image, title, location, listeners }: Props) => {
  return (
    <div className="swiper-slide trending__item text-center round16 p-8">
      <div className="thumb ralt overhid transition">
        <Image
          src={image}
          layout="responsive"
          className="transition"
          alt="img"
        />
        <div className="trending__bbar d-flex align-items-center justify-content-around">
          <Link
            href="#"
            className="d-flex fs-16 fw-500 white align-items-center gap-3"
          >
            <IconListTree />
            37
          </Link>
          <Link
            href="#"
            className="d-flex fs-16 fw-500 white align-items-center gap-3"
          >
            <IconHeadphones />
            {listeners}
          </Link>
        </div>
        <AudioPlayer audio="http://physical-authority.surge.sh/music/2.mp3" />
      </div>
      <div className="content mt-16">
        <h5>
          <Link href="trending-details" className="white d-block mb-1">
            {title}
          </Link>
          <span className="d-block transition fs-16 fw-500 pra2">
            {location}
          </span>
        </h5>
      </div>
    </div>
  );
};

export default TrendingSliderCard;
