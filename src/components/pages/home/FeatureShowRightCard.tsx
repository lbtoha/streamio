import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  totalEpisodes: number;
  title: string;
};

const FeatureShowRightCard = ({ image, totalEpisodes, title }: Props) => {
  return (
    <div className="showbox mb-16 d-flex align-items-center">
      <div className="s__img">
        <Image src={image} alt="img" />
      </div>
      <div className="s__content">
        <span className="fs-14 fw-500 base2 mb-2 d-block">
          Total Episode: {totalEpisodes}
        </span>
        <h5 className="mb-20">
          <a href="#0" className="white">
            {title}
          </a>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <ul className="show__listen d-flex align-items-center">
            <li>
              <a
                href="javascript:void(0)"
                className="d-flex align-items-center fs-12 fw-500 white gap-2"
              >
                <i className="ti ti-headphones"></i>
                Listen Now
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="d-flex align-items-center fw-500 white gap-2"
              >
                <i className="ti ti-address-book"></i>
                Browse All
              </a>
            </li>
          </ul>
          <a href="show-details.html" className="cmn__arrow40">
            <i className="ti ti-arrow-narrow-right fs-24 arrowrotate"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowRightCard;
