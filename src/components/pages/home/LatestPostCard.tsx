import AudioPlayer from "@/components/shared/AudioPlayer";
import { IconMessageMinus } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
