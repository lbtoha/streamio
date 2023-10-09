import {
  IconBrandBehance,
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitch,
  IconBrandWhatsapp,
  IconBrandWikipedia,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import AudioPlayer from "./AudioPlayer";

const SharedModal = () => {
  return (
    <div className="modal fade" id="exampleModalShare" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content play__shapewrap">
          <h4 className="white text-center mb-40">Share this Song</h4>
          <div className="modal-body">
            <ul
              className="nav d-flex align-items-center nav-tabs"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                  aria-label="home-tab"
                >
                  Share
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                  aria-label="profile-tab"
                >
                  Embed
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="d-flex mt-18 mb-20 align-items-center gap-3">
                  <Image
                    width={56}
                    height={56}
                    src="/img/details/country-box.jpg"
                    alt="img"
                  />
                  <div className="content">
                    <span className="fs-500 d-block bodyfont white">
                      I Love My Country
                    </span>
                    <span className="fs-12 fw-400 bodyfont white d-block">
                      Laufey
                    </span>
                  </div>
                </div>
                <ul className="custom__social d-flex align-center gap-2">
                  <li>
                    <Link href="#0">
                      <IconBrandFacebook className="white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#0">
                      <IconBrandTwitch className="white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#0">
                      <IconBrandInstagram className="white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#0">
                      <IconBrandWhatsapp className="white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#0">
                      <IconBrandYoutube className="white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#0">
                      <IconBrandDiscord className="white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#0">
                      <IconBrandWikipedia className="white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#0">
                      <IconBrandBehance className="white" />
                    </Link>
                  </li>
                </ul>
                <input
                  className="thmb_url"
                  type="text"
                  defaultValue="https://demo.deepsoundscript.com/track/bqDlwx13lz881WM"
                />
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="d-flex online__embeded mt-18 align-items-center gap-3">
                  <div className="online__thumb">
                    <Image
                      width={252}
                      height={273}
                      src="/img/details/online-audio.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="content">
                    <span className="fs-500 mb-1 d-block bodyfont white">
                      Trending brend Song
                    </span>
                    <span className="fs-12 fw-400 bodyfont white d-block">
                      Laufey <span className="base">1 years ago</span>
                    </span>
                    <div className="d-flex align-items-center gap-2 d-flex align-items-center">
                      <AudioPlayer />
                      <Link href="#0" className="song__bar">
                        <Image
                          width={942}
                          height={87}
                          src="/img/details/song-bar.png"
                          alt="img"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="d-flex embed__input mt-20 align-items-center">
                  <input
                    className="thmb_url"
                    type="text"
                    defaultValue="https://demo.deepsoundscript.com/track/bqDlwx13lz881WM"
                  />
                  <input
                    type="color"
                    className="colorplate"
                    name="head"
                    defaultValue="#e66465"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              aria-label="button"
              className="btn"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedModal;
