import AudioPlayer from "@/components/shared/AudioPlayer";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  subTitle: string;
  song: string;
};
const MoodsCard = ({ image, title, subTitle, song }: Props) => {
  return (
    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4">
      <div className="moods__item">
        <div className="thumb mb-16 ralt transition overhid">
          <Image
            width={200}
            height={200}
            src={image}
            className="w-100 round50 transition overhid"
            alt="img"
          />
          <AudioPlayer audio={song} />
        </div>
        <div className="content">
          <h5 className="mb-2">
            <a href="mood-details.html" className="white">
              {title}
            </a>
          </h5>
          <span className="pra fs-14 bodyfont d-block">{subTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default MoodsCard;
