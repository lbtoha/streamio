"use client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";
import ModalAudioPlayer from "../pages/explore/ModalAudioPlayer";

const AudioPlayerModalLayoutTwo = () => {
  const modalOpen = useSelector((state: RootState) => state.customModal);

  return (
    <div className={`audio-modal ${modalOpen ? "audio-modal-open" : ""}`}>
      <div className="audio-modal__content  big__playbar">
        <div className="d-flex leftside__text align-items-center gap-2">
          <Image
            width={56}
            height={56}
            src="/img/details/country-box.jpg"
            alt="img"
          />
          <span className="fs-16 fw-500 bodyfont">Rocky Pub</span>
        </div>
        <ModalAudioPlayer />
      </div>
    </div>
  );
};

export default AudioPlayerModalLayoutTwo;
