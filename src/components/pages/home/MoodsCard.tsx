import AudioPlayer from "@/components/shared/AudioPlayer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  title: string;
  subTitle: string;
  song: string;
  link: string;
};
const MoodsCard = ({ image, title, subTitle, song, link }: Props) => {
  return (
    <div className="moods__item">
      <div className="thumb mb-16 ralt transition overhid">
        <Image
          width={200}
          height={200}
          src={image}
          className="w-100 round50 transition overhid h-auto"
          alt="img"
        />
        <AudioPlayer audio={song} />
      </div>
      <div className="content">
        <h5 className="mb-2">
          <Link href={link} className="white">
            {title}
          </Link>
        </h5>
        <span className="pra fs-14 bodyfont d-block">{subTitle}</span>
      </div>
    </div>
  );
};

export default MoodsCard;
