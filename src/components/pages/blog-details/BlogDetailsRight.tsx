import Image from "next/image";

const BlogDetailsRight = () => {
  return (
    <div className="col-lg-4">
      <div className="blog__detailsright">
        <div className="blog__drightcommon mb-24">
          <span className="fs-20 fw-500 d-block mb-16 white">Search</span>
          <form
            action="#0"
            className="search__form d-flex align-items-center justify-content-between"
          >
            <input type="text" placeholder="Search" />
            <button type="submit">
              <i className="ti ti-search"></i>
            </button>
          </form>
        </div>
        <div className="blog__drightcommon mb-24">
          <span className="fs-20 fw-500 d-block mb-16 white">Categories</span>
          <ul className="cates">
            <li>
              <a
                href="#0"
                className="d-flex fs-16 fw-400 white bodyfont align-items-center gap-2"
              >
                <i className="ti ti-checkbox fs-20"></i>
                Desing System
              </a>
            </li>
            <li>
              <a
                href="#0"
                className="d-flex fs-16 fw-400 white bodyfont align-items-center gap-2"
              >
                <i className="ti ti-checkbox fs-20"></i>
                Lifestyle
              </a>
            </li>
            <li>
              <a
                href="#0"
                className="d-flex fs-16 fw-400 white bodyfont align-items-center gap-2"
              >
                <i className="ti ti-checkbox fs-20"></i>
                Colors & Typography
              </a>
            </li>
            <li>
              <a
                href="#0"
                className="d-flex fs-16 fw-400 white bodyfont align-items-center gap-2"
              >
                <i className="ti ti-checkbox fs-20"></i>
                Uncategorized
              </a>
            </li>
          </ul>
        </div>
        <div className="blog__drightcommon mb-24">
          <span className="fs-20 fw-500 d-block mb-16 white">Recent Post</span>
          <ul className="recent__post">
            <li>
              <a href="#0" className="d-flex align-items-center">
                <Image
                  width={90}
                  height={92}
                  src="/img/blog/recent1.jpg"
                  alt="img"
                />
                <div className="content">
                  <span className="fs-14 fw-400 base2 bodyfont d-block mb-2">
                    March 27, 2023
                  </span>
                  <span className="white d-block fs-20 fw-400 headfont">
                    Journeying through Genres and Cultures&ldquo;
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#0" className="d-flex align-items-center">
                <Image
                  width={90}
                  height={92}
                  src="/img/blog/recent2.jpg"
                  alt="img"
                />
                <div className="content">
                  <span className="fs-14 fw-400 base2 bodyfont d-block mb-2">
                    April 22, 2023
                  </span>
                  <span className="white d-block fs-20 fw-400 headfont">
                    Serenading the Senses: How Music Shapes
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#0" className="d-flex align-items-center">
                <Image
                  width={90}
                  height={92}
                  src="/img/blog/recent3.jpg"
                  alt="img"
                />
                <div className="content">
                  <span className="fs-14 fw-400 base2 bodyfont d-block mb-2">
                    April 12, 2023
                  </span>
                  <span className="white d-block fs-20 fw-400 headfont">
                    How Music Shapes Our Perceptions&ldquo;
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="get__touchwrap">
          <div className="get__touch ralt">
            <Image
              width={390}
              height={312}
              src="/img/blog/gettouch.jpg"
              alt="img"
            />
            <div className="gettouch__content text-center">
              <div className="box">
                <h3 className="white mb-1">Get In Touch</h3>
                <span className="headfont white  d-block mb-24">
                  (987-260-955-750)
                </span>
                <a href="#0" className="cmn--btn">
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsRight;
