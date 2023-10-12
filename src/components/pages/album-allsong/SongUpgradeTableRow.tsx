import { IconDots, IconPlaylistAdd, IconShare } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: StaticImageData;
  singer: string;
  songDuration: string;
  link: string;
  index: number;
};
const SongUpgradeTableRow = ({
  title,
  image,
  singer,
  songDuration,
  index,
}: Props) => {
  return (
    <tr>
      <td>
        <Link
          href="album-details"
          className="upgrade__left d-flex align-items-center gap-3"
        >
          <span className="fs-16 fw-500 d-block bodyfont white">
            {index <= 9 ? `0${index}` : index}
          </span>
          <Image width={56} height={56} src={image} alt="img" />
          <span className="fs-16 fw-500 bodyfont white d-block">
            {title}
            <span className="fs-12 mt-1 laufey fw-400 pra bodyfont d-block">
              {singer}
            </span>
          </span>
        </Link>
      </td>
      <td className="d__custom">
        <Link href="album-details" className="d-block white fs-14 bodyfont">
          The Best of Sade
        </Link>
      </td>
      <td className="d__custom">
        <Link href="album-details" className="d-block white fs-14 bodyfont">
          April 07, 2023
        </Link>
      </td>
      <td>
        <div className="d-flex align-items-center justify-content-end gap-2">
          <span className="pra latest__time bodyfont fs-14">
            {songDuration}
          </span>
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
      </td>
    </tr>
  );
};

export default SongUpgradeTableRow;
