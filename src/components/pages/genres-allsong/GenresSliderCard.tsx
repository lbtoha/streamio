import AudioPlayer from "@/components/shared/AudioPlayer";
import { IconPlaylist } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  title: string;
  subTitle: number;
  song: string;
  link: string;
};
const GenresSliderCard = ({ image, title, subTitle, song, link }: Props) => {
  return (
    <div className="moods__item genres__song">
      <div className="thumb ralt mb-16 transition overhid">
        <Image
          src={image}
          className="w-100 round50 transition overhid h-auto flex-shrink-0"
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
        <Link
          href="genres-details"
          className="d-flex fs-14 bodyfont fw-500 pra align-items-center gap-2"
        >
          <IconPlaylist className="playlist fs-24" />
          {subTitle}
        </Link>
      </div>
    </div>
  );
};

export default GenresSliderCard;
