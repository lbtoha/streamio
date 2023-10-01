import Image, { StaticImageData } from "next/image";

type Props = {
  singerImage: StaticImageData;
  singerName: string;
  share: string;
  songTitle: string;
  songThumbnail: StaticImageData;
  songSubtitle: string;
  songDuration: string;
};
const ExploreSectionTableRow = ({
  singerImage,
  singerName,
  share,
  songTitle,
  songThumbnail,
  songSubtitle,
  songDuration,
}: Props) => {
  return (
    <>
      <tr className="bgnone__music">
        <td>
          <a href="#0" className="upgrade__left d-flex align-items-center">
            <Image src={singerImage} className="round50" alt="img" />
            <span className="fs-16 fw-500 bodyfont white d-block">
              {singerName}
              <span className="fs-12 mt-1 laufey fw-400 pra bodyfont d-block">
                {share}
              </span>
            </span>
          </a>
        </td>
        <td className="d__custom">
          <a href="#0" className="d-block white fs-14 bodyfont">
            The Best of Sade
          </a>
        </td>
        <td className="d__custom">
          <a href="#0" className="d-block white fs-14 bodyfont">
            April 07, 2023
          </a>
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
              >
                <i className="ti ti-dots white"></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby="drops1">
                <li className="mb-2">
                  <a
                    className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <i className="ti ti-trash base2 fs-24"></i>
                    Delet Post
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                  >
                    <i className="ti ti-message-report fs-24"></i>
                    Report
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="ti ti-playlist-add fs-24 base"></i>
                    Add To Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </td>
      </tr>
      <tr className="citem__border">
        <td data-bs-toggle="modal" data-bs-target="#exampleModalaudio">
          <a href="#0" className="upgrade__left d-flex align-items-center">
            <Image src={songThumbnail} alt="img" />
            <span className="fs-16 fw-500 bodyfont white d-block">
              {songTitle}
              <span className="fs-12 mt-1 laufey fw-400 pra bodyfont d-block">
                {songSubtitle}
              </span>
            </span>
          </a>
        </td>
        <td className="d__custom">
          <a href="#0" className="d-block white fs-14 bodyfont">
            The Best of Sade
          </a>
        </td>
        <td className="d__custom">
          <a href="#0" className="d-block white fs-14 bodyfont">
            April 07, 2023
          </a>
        </td>
        <td>
          <div className="d-flex align-items-center justify-content-end gap-2">
            <span>
              <i className="ti ti-clock-hour-3 fs-22 pra"></i>
            </span>
            <span className="pra latest__time bodyfont fs-14">
              {songDuration}
            </span>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ExploreSectionTableRow;
