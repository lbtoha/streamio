import AudioPlayer from "@/components/shared/AudioPlayer";
import Image from "next/image";

const ShowDetailsSection = () => {
  return (
    <section className="genres__details custom__space pb-100 mr-24 ml-24">
      <div className="bebgadd__box">
        <div className="container">
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
                <span className="fs-16 fw-500 bodyfont white">
                  Chester Bennington
                </span>
              </div>
              <h2 className="white mb-16">
                Have Podcast AdvertiSign Up & Runnung in Minutes
              </h2>
              <div className="d-flex conveter__follow align-items-center">
                <a href="#0" className="cmbtn d-flex gap-2">
                  <span>
                    <i className="ti ti-user-plus fs-24 base"></i>
                  </span>
                  <span>Follow</span>
                </a>
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
                  <a
                    className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="ti ti-playlist-add fs-30 base"></i>
                    Add To Playlist
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-2 fs-14 fw-400 bodyfont pra"
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <i className="ti ti-share fs-30 base"></i>
                    Share
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="conveter__barwrap mb-60 d-flex align-items-center">
            <Image
              width={252}
              height={273}
              src="/img/trending/show-details.jpg"
              alt="img"
            />
            <div className="online__audiowrap">
              <div className="audio__probar">
                <Image
                  width={942}
                  height={87}
                  src="/img/details/song-bar.png"
                  alt="img"
                />
              </div>
              <div className="d-flex mt-80 like__dislike justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center gap-4">
                  <a href="#0" className="cmbtn d-flex gap-2">
                    <span>
                      <i className="ti ti-thumb-up fs-24 base"></i>
                    </span>
                    <span>Like</span>
                  </a>
                  <a href="#0" className="cmbtn d-flex gap-2">
                    <span>
                      <i className="ti ti-thumb-down fs-24 base"></i>
                    </span>
                    <span>Dislike</span>
                  </a>
                </div>
                <AudioPlayer />
                <div className="d-flex align-items-center gap-4">
                  <a href="#0" className="cmbtn d-flex gap-2">
                    <span>
                      <i className="ti ti-share fs-24 base"></i>
                    </span>
                    <span>Share</span>
                  </a>
                  <a href="#0" className="cmbtn d-flex gap-2">
                    <span>
                      <i className="ti ti-share-3 fs-24 base"></i>
                    </span>
                    <span>Re Post</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="show__detailscontent">
            <h3>About This Podcast</h3>
            <p className="fs-16 fw-400 pra mb-10 bodyfont">
              Music is a powerful and universal language that has the ability to
              stir emotions, ignite memories, and bring people together. From
              soulful melodies to energetic beats, music has been an integral
              part of human culture for centuries. Whether you&apos;re a
              passionate musician, an avid listener, or just someone who enjoys
              a good tune, music can have a profound impact on your life.
            </p>
            <p className="fs-16 fw-400 pra mb-24 bodyfont">
              Music is a powerful and universal language that has the ability to
              stir emotions, ignite memories, and bring people together. From
              soulful melodies to energetic beats, music has been an integral
              part of human culture for centuries. Whether you&apos;re a
              passionate musician, an avid listener.
            </p>
            <ul className="list__show mb-24">
              <li className="mb-10">
                Rhythm and Resonance: Exploring the Magic of Music.
              </li>
              <li className="mb-10">
                Sonic Serenade: The Transformative Power of Music.
              </li>
              <li className="mb-10">
                Notes of Life: The Melody That Defines Us
              </li>
              <li>Beats of Time: Music&apos;s Enduring Influence.</li>
            </ul>
            <p className="fs-16 fw-400 pra mb-30 bodyfont">
              Furthermore, music has always played a significant role in shaping
              cultural identities and bridging gaps between diverse communities.
              It can transcend language barriers and foster understanding
              between people from different backgrounds.
            </p>
            <div className="d-flex emotion__thumb mb-30 align-items-center">
              <Image
                width={804}
                height={411}
                src="/img/blog/show-details1.jpg"
                alt="img"
              />
              <Image
                width={804}
                height={411}
                src="/img/blog/show-details2.jpg"
                alt="img"
              />
            </div>
            <h4 className="white mb-10">
              Beats of Time: Music&apos;s Enduring Influence
            </h4>
            <p className="fs-16 fw-400 pra mb-24">
              As technology advances, the way we consume and create music
              continues to evolve. Online streaming platforms have made music
              more accessible than ever, enabling us to explore new artists and
              discover hidden gems from around the world. Meanwhile, digital
              audio workstations and other tools have empowered aspiring
              musicians to produce high-quality music from the comfort of their
              homes.
            </p>
            <p className="fs-20 pragraph__bold fw-500 bodyfont white">
              In conclusion, music is a gift that enriches our lives in
              countless ways. Its ability to evoke emotions, connect people, and
              provide solace makes it an essential part of the human experience.
              So whether you&apos;re humming along to your favorite song or
              creating melodies of your own let the power of music guide you on
              a journey.
            </p>
            <h5 className="white mb-10">The Soundtrack of Humanity</h5>
            <p className="fs-16 bodyfont pra mb-10">
              Furthermore, music has always played a significant role in shaping
              cultural identities and bridging gaps between diverse communities.
              It can transcend language barriers and foster understanding
              between people from different backgrounds.
            </p>
            <p className="fs-16 bodyfont pra mb-10">
              Creating music is an art form that allows individuals to express
              their thoughts, emotions, and experiences in a unique and creative
              way. Musicians pour their hearts into their compositions, crafting
              melodies and lyrics that resonate with listeners worldwide. Music
              has the power to tell stories, convey messages, and inspire
              change, making it a potent tool for social and cultural movements.
            </p>
          </div>
          <div className="tag__boxes tag__shareshow mt-30 mb-60 d-flex align-items-center">
            <ul className="tag d-flex align-items-center">
              <li className="fs-24 me-1 fw-400 white headfont">Tag:</li>
              <li>
                <a href="#0" className="tagbtn white fs-14">
                  Graphic River
                </a>
              </li>
              <li>
                <a href="#0" className="tagbtn white fs-14">
                  Graphic River
                </a>
              </li>
              <li>
                <a href="#0" className="tagbtn white fs-14">
                  Graphic River
                </a>
              </li>
            </ul>
            <ul className="tag d-flex align-items-center">
              <li className="fs-24 me-1 fw-400 white headfont">Share:</li>
              <li>
                <a href="#0" className="sicon white">
                  <i className="ti pra fz-24 ti-brand-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#0" className="sicon white">
                  <i className="ti pra fz-24 ti-brand-twitch"></i>
                </a>
              </li>
              <li>
                <a href="#0" className="sicon white">
                  <i className="ti pra fz-24 ti-brand-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowDetailsSection;