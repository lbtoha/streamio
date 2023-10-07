import Image from "next/image";

const Loader = () => {
  return (
    <div className="preloader__wrap">
      <div className="preloader__box">
        <div className="recharge mb-4">
          <Image
            width={68}
            height={51}
            src="/img/logo/favicon-small.png"
            alt="rechage"
          />
        </div>
        <span className="fs-18 text-uppercase headfont d-block">Streamio</span>
      </div>
    </div>
  );
};

export default Loader;
