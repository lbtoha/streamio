import {
  IconDots,
  IconPlaylistAdd,
  IconShare,
  IconUserPlus,
} from "@tabler/icons-react";
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
          <button className="cmbtn d-flex gap-2">
            <span>
              <IconUserPlus className="fs-24 base" />
            </span>
            <span>Follow</span>
          </button>
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
          aria-label="dropdown"
        >
          <IconDots className="white" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="drops1">
          <li className="mb-2">
            <Link
              className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalAddPlayList"
            >
              <IconPlaylistAdd className="fs-30 base" />
              Add To Playlist
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalShare"
            >
              <IconShare className="fs-30 base" />
              Share
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ConveterHead;
