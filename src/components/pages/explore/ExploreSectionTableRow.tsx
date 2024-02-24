"use client";
import usePlayButtonClick from "@/hooks/usePlayButtonClick";
import {
  IconClockHour3,
  IconDots,
  IconMessageReport,
  IconPlaylistAdd,
  IconTrash,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  singerImage: StaticImageData;
  singerName: string;
  share: string;
  songTitle: string;
  songThumbnail: StaticImageData;
  songSubtitle: string;
  songDuration: string;
  song: string;
  index: number;
};
const ExploreSectionTableRow = ({
  singerImage,
  singerName,
  share,
  songTitle,
  songThumbnail,
  songSubtitle,
  songDuration,
  song,
  index,
}: Props) => {
  const { handlePlayButtonClick } = usePlayButtonClick();

  return (
    <>
      <tr className="bgnone__music">
        <td>
          <Link href="#0" className="upgrade__left d-flex align-items-center">
            <Image src={singerImage} className="round50" alt="img" />
            <span className="fs-16 fw-500 bodyfont white d-block">
              {singerName}
              <span className="fs-12 mt-1 laufey fw-400 pra bodyfont d-block">
                {share}
              </span>
            </span>
          </Link>
        </td>
        <td className="d__custom">
          <Link href="#0" className="d-block white fs-14 bodyfont">
            The Best of Sade
          </Link>
        </td>
        <td className="d__custom">
          <Link href="#0" className="d-block white fs-14 bodyfont">
            April 07, 2023
          </Link>
        </td>
        <td>
          <div className="d-flex align-items-center justify-content-end gap-2">
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                type="button"
                id="drops1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="dropdown button"
              >
                <IconDots className="white " />
              </button>
              <ul className="dropdown-menu" aria-labelledby="drops1">
                <li className="mb-2">
                  <Link
                    className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalDelete"
                  >
                    <IconTrash className="base2 fs-24" />
                    Delete Post
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalReport"
                  >
                    <IconMessageReport className="fs-24" />
                    Report
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalAddPlayList"
                  >
                    <IconPlaylistAdd className="fs-24 base" />
                    Add To Playlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </td>
      </tr>

      <tr
        className="citem__border"
        onClick={() => {
          handlePlayButtonClick(song);
        }}
      >
        <td data-bs-toggle="modal" data-bs-target={`#exampleModalaudio`}>
          <Link href="#0" className="upgrade__left d-flex align-items-center">
            <Image src={songThumbnail} alt="img" />
            <span className="fs-16 fw-500 bodyfont white d-block">
              {songTitle}
              <span className="fs-12 mt-1 laufey fw-400 pra bodyfont d-block">
                {songSubtitle}
              </span>
            </span>
          </Link>
        </td>
        <td className="d__custom">
          <Link href="#0" className="d-block white fs-14 bodyfont">
            The Best of Sade
          </Link>
        </td>
        <td className="d__custom">
          <Link href="#0" className="d-block white fs-14 bodyfont">
            April 07, 2023
          </Link>
        </td>
        <td>
          <div className="d-flex align-items-center justify-content-end gap-2">
            <span>
              <IconClockHour3 className="fs-22 pra" />
            </span>
            <span className="pra latest__time bodyfont fs-14">
              {songDuration}
            </span>
          </div>
        </td>
      </tr>
      {/* <AudioPlayerModal
        id={`${index}`}
        audioLink="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
      /> */}
    </>
  );
};

export default ExploreSectionTableRow;
