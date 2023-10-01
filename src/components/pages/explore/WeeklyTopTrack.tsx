import AudioPlayer from "@/components/shared/AudioPlayer";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  singer: string;
};
const WeeklyTopTrack = ({ image, title, singer }: Props) => {
  return (
    <li className="d-flex align-items-center justify-content-between">
      <div className="d-flex gap-2 align-items-center">
        <Image width={56} height={56} src={image} alt="img" />
        <span className="content">
          <span className="fs-16 d-block mb-1 fw-500 white bodyfont">
            {title}
          </span>
          <span className="fs-12 fw-400 bodyfont pra d-block">{singer}</span>
        </span>
      </div>
      <AudioPlayer />
    </li>
  );
};

export default WeeklyTopTrack;
