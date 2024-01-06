"use client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";
import ModalAudioPlayer from "../pages/explore/ModalAudioPlayer";

const AudioPlayerModalLayout = () => {
  const audioLink = useSelector((state: RootState) => state.track);

  return (
    <div
      className="modal backdrop profile-completeness-modal fade"
      // data-bs-backdrop="static"
      data-bs-backdrop="false"
      // data-bs-keyboard="false"
      aria-labelledby="offcanvasScrollingLabel"
      id={`exampleModalaudio`}
      aria-hidden={true}
    >
      <div className="modal-dialog width__maintain modal-dialog-centered modal-bottom">
        <div className="modal-content">
          <div className="modal-body big__playbar">
            <div className="d-flex leftside__text align-items-center gap-2">
              <Image
                width={56}
                height={56}
                src="/img/details/country-box.jpg"
                alt="img"
              />
              <span className="fs-16 fw-500 bodyfont">Rocky Pub</span>
            </div>
            <ModalAudioPlayer audio={`${audioLink}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerModalLayout;
