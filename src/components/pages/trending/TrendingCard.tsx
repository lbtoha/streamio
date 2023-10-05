"use client";
import AudioPlayer from "@/components/shared/AudioPlayer";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  location: string;
  listeners: number;
};
const TrendingCard = ({ image, title, location, listeners }: Props) => {
  return (
    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
      <div className="trending__item text-center round16">
        <div className="thumb ralt overhid transition">
          <Image src={image} className="transition" alt="img" />
          <div className="trending__bbar d-flex align-items-center justify-content-around">
            <a
              href="javascript:void(0)"
              className="d-flex fs-16 fw-500 white align-items-center gap-3"
            >
              <i className="ti ti-list-tree"></i>
              37
            </a>
            <a
              href="javascript:void(0)"
              className="d-flex fs-16 fw-500 white align-items-center gap-3"
            >
              <i className="ti ti-headphones"></i>
              {listeners}
            </a>
          </div>
          <AudioPlayer audio="http://physical-authority.surge.sh/music/2.mp3" />
        </div>
        <div className="content mt-16">
          <h5>
            <a href="trending-details.html" className="white d-block mb-1">
              {title}
            </a>
            <span className="d-block transition fs-16 fw-500 pra2">
              {location}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
