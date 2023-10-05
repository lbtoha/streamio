import Image from "next/image";
import Link from "next/link";

const ConveterHead = ({
  name,
  songTitle,
}: {
  name: string;
  songTitle: string;
}) => {
  return (
    <div className="conveter__head pt-30 mb-40 d-flex align-items-center">
      <div className="left__box">
        <div className="d-flex mb-24 align-items-center gap-3">
          <Image
            width={52}
            height={52}
            src="/img/details/conveter.jpg"
            className="round50"
            alt="img"
          />
          <span className="fs-16 fw-500 bodyfont white">{name}</span>
        </div>
        <h2 className="white mb-16">{songTitle}</h2>
        <div className="d-flex conveter__follow align-items-center">
          <Link href="#0" className="cmbtn d-flex gap-2">
            <span>
              <i className="ti ti-user-plus fs-24 base"></i>
            </span>
            <span>Follow</span>
          </Link>
          <span className="fs-16 fw-500 bodyfont white">
            03 days ago in Tomb
          </span>
        </div>
      </div>
      <div className="dropdown">
        <button
          className="dropdown-toggle"
          type="button"
          id="drops1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="ti ti-dots white"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="drops1">
          <li className="mb-2">
            <Link
              className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="ti ti-playlist-add fs-30 base"></i>
              Add To Playlist
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <i className="ti ti-share fs-30 base"></i>
              Share
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ConveterHead;
