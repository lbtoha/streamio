import AudioPlayer from "@/components/shared/AudioPlayer";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  song: string;
};
const SliderCard = ({ image, song }: Props) => {
  return (
    <div className="swiper-slide trending__item text-center round16 p-8">
      <div className="thumb ralt overhid transition">
        <Image src={image} className="transition" alt="img" />
        <AudioPlayer audio={song} />
      </div>
    </div>
  );
};

export default SliderCard;
