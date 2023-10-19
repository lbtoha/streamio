import {
  IconAddressBook,
  IconArrowNarrowRight,
  IconHeadphones,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  date: string;
  totalEpisodes: number;
  title: string;
  description: string;
};
const FeatureShowLeftCard = ({
  image,
  date,
  totalEpisodes,
  title,
  description,
}: Props) => {
  return (
    <div className="col-xxl-4 col-md-6 ">
      <div className="featured__show ralt">
        <div className="thumb overhid ralt">
          <Image
            src={image}
            className="w-100 transition overhid h-auto"
            alt="img"
          />
        </div>
        <div className="f__showcontent">
          <div className="d-flex align-items-center mb-16 justify-content-between">
            <span className="fs-14 show__date ralt fw-500 base2 d-block">
              {date}
            </span>
            <span className="fs-14 fw-500 base2 d-block">
              Total Episode: {totalEpisodes}
            </span>
          </div>
          <h4 className="mb-16">
            <Link href="show-details" className="white">
              {title}
            </Link>
          </h4>
          <p className="pra bodyfont d-block mb-28">{description}</p>
          <div className="d-flex align-items-center justify-content-between">
            <ul className="show__listen d-flex align-items-center">
              <li>
                <Link
                  href="#"
                  className="d-flex align-items-center fs-14 fw-500 white gap-2"
                >
                  <IconHeadphones />
                  Listen Now
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="d-flex align-items-center fs-14 fw-500 white gap-2"
                >
                  <IconAddressBook />
                  Browse All
                </Link>
              </li>
            </ul>
            <Link href="show-details" className="cmn__arrow40">
              <IconArrowNarrowRight className="arrowrotate" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowLeftCard;
