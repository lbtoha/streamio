import Image, { StaticImageData } from "next/image";

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
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
      <div className="featured__show ralt">
        <div className="thumb overhid ralt">
          <Image src={image} className="w-100 transition overhid" alt="img" />
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
            <a href="show-details.html" className="white">
              {title}
            </a>
          </h4>
          <p className="pra bodyfont d-block mb-28">{description}</p>
          <div className="d-flex align-items-center justify-content-between">
            <ul className="show__listen d-flex align-items-center">
              <li>
                <a
                  href="javascript:void(0)"
                  className="d-flex align-items-center fs-14 fw-500 white gap-2"
                >
                  <i className="ti ti-headphones"></i>
                  Listen Now
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="d-flex align-items-center fs-14 fw-500 white gap-2"
                >
                  <i className="ti ti-address-book"></i>
                  Browse All
                </a>
              </li>
            </ul>
            <a href="show-details.html" className="cmn__arrow40">
              <i className="ti ti-arrow-narrow-right arrowrotate"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowLeftCard;
