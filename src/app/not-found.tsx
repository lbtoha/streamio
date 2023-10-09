import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <BreadCrumSingle page="Error" />
      <section className="error__section pr-24 pl-24 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="error__content text-center">
                <div className="thumb">
                  <Image
                    width={370}
                    height={315}
                    src="/img/error/error.png"
                    alt="img"
                    className="h-auto"
                  />
                </div>
                <div className="content">
                  <h1 className="white mb-16">Sorry, page not found!</h1>
                  <p className="fs-16 bodyfont mb-40">
                    The page you are looking for could not be found. Please
                    check the link you followed to get here and try again.
                  </p>
                  <Link href="/" className="cmn--btn">
                    <span>Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
