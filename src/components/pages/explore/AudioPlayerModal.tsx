import Image from "next/image";
import ModalAudioPlayer from "./ModalAudioPlayer";

const AudioPlayerModal = () => {
  return (
    <div
      className="modal backdrop profile-completeness-modal fade"
      id="exampleModalaudio"
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
            <ModalAudioPlayer audio="../audio/audio.mp3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerModal;
