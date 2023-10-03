import AudioPlayer from "@/components/shared/AudioPlayer";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  views: number;
  song: string;
  subTitle: string;
};

const PodcastCard = ({ image, title, views, song, subTitle }: Props) => {
  return (
    <div className="trending__item round16 p-8">
      <div className="thumb ralt overhid transition">
        <Image src={image} className="transition" alt="img" />
        <div className="podcast__viwer d-flex align-items-center justify-content-between">
          <span className="live fs-16 bodyfont white">LIve</span>
          <span className="viewer fs-16 bodyfont white">{views}k Viewers</span>
        </div>
        <div className="artist__popup d-flex align-items-center justify-content-between">
          <div className="content">
            <h5 className="mb-1">
              <a href="podcast-allsong.html" className="white">
                {title}
              </a>
            </h5>
            <span className="fs-16 fw-500 pra3 d-block">{subTitle}</span>
          </div>
          <a href="podcast-allsong.html" className="cmn__arrow">
            <i className="ti ti-arrow-narrow-right arrowrotate"></i>
          </a>
        </div>
        <AudioPlayer audio={song} />
      </div>
    </div>
  );
};

export default PodcastCard;