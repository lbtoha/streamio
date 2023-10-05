import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    // <!--Footer Section-->
    <footer className="footer__section pl-24 pr-24">
      <div className="container">
        <div className="footer__top">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-sm-6 quick__space">
              <div className="footer__widget">
                <h4 className="white mb-30">Quick Link</h4>
                <div className="link__attach d-flex">
                  <ul className="link">
                    <li className="mb-16">
                      <Link
                        href="javascript:void(0)"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        About
                      </Link>
                    </li>
                    <li className="mb-16">
                      <Link
                        href="profile"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="artist-allsong"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        Artists
                      </Link>
                    </li>
                  </ul>
                  <ul className="link">
                    <li className="mb-16">
                      <Link
                        href="pricing"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        Pricing Plan
                      </Link>
                    </li>
                    <li className="mb-16">
                      <Link
                        href="poodcasts"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        Podcasts
                      </Link>
                    </li>
                    <li>
                      <Link href="event" className="fs-16 fw-400 bodyfont pra">
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer__form">
                  <h4 className="white mb-24">Newslatter Our</h4>
                  <form
                    action="#0"
                    className="d-flex align-items-center justify-content-between gap-1"
                  >
                    <input type="email" placeholder="Email address" />
                    <button type="submit">
                      <span>Go</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 footer__streamio">
              <div className="footer__widget text-center">
                <p className="pra  bodyfont fs-16 mb-60">
                  Databest - powerful Podcasts expert on processing marketing
                  data
                </p>
                <Link href="index" className="d-block mb-60">
                  <Image
                    width={68}
                    height={51}
                    src="/img/logo/favicon-small.png"
                    alt="img"
                  />
                  <h3 className="white">Streamio</h3>
                </Link>
                <p className="pra level__message bodyfont fs-16">
                  Level up your cases with tons of data
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 footercontact__link">
              <div className="footer__widget">
                <h4 className="white mb-30">Contact</h4>
                <div className="link__attach mb-60 d-flex">
                  <ul className="link">
                    <li className="mb-16">
                      <Link
                        href="javascript:void(0)"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        UA: +3 567 897 483
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="javascript:void(0)"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        ronyui3630.com
                      </Link>
                    </li>
                  </ul>
                  <ul className="link">
                    <li className="mb-16">
                      <Link
                        href="javascript:void(0)"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        www.Pixelaxic.com
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="javascript:void(0)"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        Ukraine, Odessa
                      </Link>
                    </li>
                  </ul>
                </div>
                <ul className="social d-flex align-items-center">
                  <li>
                    <Link href="javascript:void(0)">
                      <i className="ti ti-brand-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <i className="ti ti-brand-twitch"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <i className="ti ti-brand-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <i className="ti ti-brand-discord"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <i className="ti ti-brand-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom d-flex align-items-center">
          <p className="pra fs-14 fw-400 bodyfont">
            Copyright &copy;Streamio{" "}
            <span className="white design__side">
              {" "}
              Designed By{" "}
              <Link
                href="https://themeforest.net/user/pixelaxis"
                className="base2"
              >
                Pixelaxis
              </Link>
            </span>
          </p>
          <ul className="privacy d-flex align-items-center gap-4">
            <li>
              <Link href="privacy" className="fs-14 fw-400 bodyfont white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="privacy" className="fs-14 fw-400 bodyfont white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
