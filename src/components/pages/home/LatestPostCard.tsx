import AudioPlayer from "@/components/shared/AudioPlayer";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  date: string;
  comment: number;
  title: string;
  type: string;
};
const LatestPostCard = ({ image, date, comment, title, type }: Props) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="latest__item overhid ralt">
        <div className="thumb ralt mb-16 transition overhid">
          <Image src={image} className="w-100 transition overhid" alt="img" />
          <AudioPlayer audio="" />
          <a href="javascript:void(0)" className="l__badge">
            {type}
          </a>
        </div>
        <div className="content">
          <div className="d-flex align-items-center justify-content-between">
            <span className="cmn__date ralt fw-500 bodyfont fs-14 base2 d-block mb-16">
              {date}
            </span>
            <a
              href="javascript:void(0)"
              className="d-flex white w-500 bodyfont align-items-center gap-3"
            >
              <i className="ti ti-message-minus base fs-20"></i>
              {comment}
            </a>
          </div>
          <h4>
            <a href="blog-details.html" className="white">
              {title}
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LatestPostCard;
