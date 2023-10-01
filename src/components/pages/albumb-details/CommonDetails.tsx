import AudioPlayer from "@/components/shared/AudioPlayer";
import Image from "next/image";

const CommonDetails = () => {
  return (
    // <!--common details-->
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
              <h2 className="white mb-16">44m</h2>
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
          <div className="conveter__barwrap d-flex align-items-center">
            <Image
              width={252}
              height={273}
              src="/img/trending/audio-albumb.jpg"
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
                <div className="pause__block">
                  <AudioPlayer />
                </div>
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
          <div className="genres__description mt-60 mb-60">
            <ul
              className="nav d-flex align-items-center nav-tabs"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-center active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-center"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Lyrics
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                <div className="description__boxes">
                  <span className="fs-16 bodyfont fw-400 white mt-16 d-block mb-2">
                    Music: I LOve My Country
                  </span>
                  <p className="fs-16 bodyfont pra mb-2">
                    Throughout history, music has played a pivotal role in human
                    culture, acting as a form of communication, celebration, and
                    therapy. It transcends language barriers, uniting
                    individuals with a shared experience of the emotions
                    conveyed by the artist. From classical masterpieces that
                    have withstood the test of time to contemporary
                    chart-toppers that dominate the airwaves, songs have the
                    power to evoke memories, transport us to different places,
                    and inspire us to overcome challenges.
                  </p>
                  <ul className="mb-20">
                    <li className="fs-16 bodyfont fw-400 pra mb-2">
                      Bass - Naveen Napier
                    </li>
                    <li className="fs-16 bodyfont fw-400 pra mb-2">
                      Amal Mithu @ K7 Studios, Cochin.
                    </li>
                    <li className="fs-16 bodyfont fw-400 pra mb-2">
                      Recordings Co-ordinator - Kd Vincent
                    </li>
                    <li className="fs-16 bodyfont fw-400 pra mb-2">
                      Session Edits & Management- Sampath S, Ranjin Raj Records,
                      Cochin
                    </li>
                  </ul>
                  <span className="fs-16 bodyfont fw-400 base2">
                    #BK HAramikoliby
                  </span>
                  <div className="listended mt-30">
                    <span className="fs-18 mb-3 fw-600 d-block bodyfont d-block white">
                      Recently Listened By
                    </span>
                    <div className="d-flex listend__thumb">
                      <a href="#0">
                        <Image
                          width={44}
                          height={44}
                          src="/img/details/listen1.png"
                          alt="user"
                        />
                      </a>
                      <a href="#0">
                        <Image
                          width={44}
                          height={44}
                          src="/img/details/listen2.png"
                          alt="user"
                        />
                      </a>
                      <a href="#0">
                        <Image
                          width={44}
                          height={44}
                          src="/img/details/listen3.png"
                          alt="user"
                        />
                      </a>
                      <a href="#0">
                        <Image
                          width={44}
                          height={44}
                          src="/img/details/listen4.png"
                          alt="user"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                <div className="description__boxes">
                  <ul className="mb-20 mt-16">
                    <li className="fs-16 bodyfont fw-400 pra mb-2">
                      Music: I LOve My Country
                    </li>
                    <li className="fs-16 bodyfont fw-400 pra mb-2">
                      Bass - Naveen Napier
                    </li>
                    <li className="fs-16 bodyfont fw-400 pra mb-2">
                      Amal Mithu @ K7 Studios, Cochin.
                    </li>
                    <li className="fs-16 bodyfont fw-400 pra mb-2">
                      Recordings Co-ordinator - Kd Vincent
                    </li>
                  </ul>
                  <div className="listended mt-30">
                    <span className="fs-18 mb-3 fw-600 d-block bodyfont d-block white">
                      Recently Listened By
                    </span>
                    <div className="d-flex listend__thumb">
                      <a href="#0">
                        <Image
                          width={44}
                          height={44}
                          src="/img/details/listen1.png"
                          alt="user"
                        />
                      </a>
                      <a href="#0">
                        <Image
                          width={44}
                          height={44}
                          src="/img/details/listen2.png"
                          alt="user"
                        />
                      </a>
                      <a href="#0">
                        <Image
                          width={44}
                          height={44}
                          src="/img/details/listen3.png"
                          alt="user"
                        />
                      </a>
                      <a href="#0">
                        <Image
                          width={44}
                          height={44}
                          src="/img/details/listen4.png"
                          alt="user"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="comment__boxes__wrapper">
              <h4 className="white mb-30">Comments: 02</h4>
              <div className="comments__box comment__boxdetails details__border pb-20 mb-20">
                <div className="author__attach  d-flex">
                  <div className="author">
                    <Image
                      width={52}
                      height={52}
                      src="/img/author/jony.png"
                      className="round50"
                      alt="img"
                    />
                  </div>
                  <div className="cont__box">
                    <h6 className="white headtext">Jony Baresto</h6>
                    <span className="fs-12 bodyfont fw-400 pra">
                      30.08.2021, 17:53
                    </span>
                    <p className="fs-16 fw-400 bodyfont pra mt-18">
                      Melodies of Emotion&quot; is a mesmerizing instrumental
                      album brought to life by the talented Harmony Ensemble.
                      collection takes listeners on an enchanting journey
                      through a variety of emotions, skillfully conveyed through
                      a blend of classical and contemporary musical elements.
                      The absence of lyrics allows to speak directly to the
                      invoking vivid imagery and stirring sentiments.
                    </p>
                    <div className="comment__boxcontent mt-16">
                      <div className="feedback__content d-flex align-items-center justify-content-end">
                        <a
                          href="javascript:void(0)"
                          className="reply cmbtn base fs-16 bodyfont d-flex align-items-center gap-2"
                        >
                          <i className="ti ti-share-3 fs-24"></i>
                          <span className="white fs-14">Reply</span>
                        </a>
                      </div>
                      <div className="reply__content mt-10">
                        <div className="d-flex small__author justify-content-end align-items-center">
                          <div className="author__thumbs">
                            <Image
                              width={52}
                              height={52}
                              src="/img/author/jony.png"
                              className="round50"
                              alt="Author"
                            />
                          </div>
                          <form
                            action="#"
                            className="d-flex align-items-center"
                          >
                            <input
                              type="text"
                              name="replytext"
                              placeholder="Join the discussion..."
                              required
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comments__box comment__boxdetails">
                <div className="author__attach  d-flex">
                  <div className="author">
                    <Image
                      width={52}
                      height={52}
                      src="/img/author/david.png"
                      className="round50"
                      alt="img"
                    />
                  </div>
                  <div className="cont__box">
                    <h6 className="white headtext">David Malan</h6>
                    <span className="fs-12 bodyfont fw-400 pra">
                      30.08.2021, 17:53
                    </span>
                    <p className="fs-16 fw-400 bodyfont pra mt-18">
                      Melodies of Emotion&quot; is a mesmerizing instrumental
                      album brought to life by the talented Harmony Ensemble.
                      collection takes listeners on an enchanting journey
                      through a variety of emotions.
                    </p>
                    <div className="comment__boxcontent mt-16">
                      <div className="feedback__content d-flex align-items-center justify-content-end">
                        <a
                          href="javascript:void(0)"
                          className="reply cmbtn base fs-16 bodyfont d-flex align-items-center gap-2"
                        >
                          <i className="ti ti-share-3 fs-24"></i>
                          <span className="white fs-14">Reply</span>
                        </a>
                      </div>
                      <div className="reply__content mt-10">
                        <div className="d-flex small__author justify-content-end align-items-center">
                          <div className="author__thumbs">
                            <Image
                              width={52}
                              height={52}
                              src="/img/author/david.png"
                              className="round50"
                              alt="Author"
                            />
                          </div>
                          <form
                            action="#"
                            className="d-flex align-items-center"
                          >
                            <input
                              type="text"
                              name="replytext"
                              placeholder="Join the discussion..."
                              required
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form action="#0" className="main__comment mt-40">
              <textarea
                name="comment"
                id="comment"
                className="mb-30"
                rows="5"
                placeholder="Add Coment"
              ></textarea>
              <span className="w-100 d-flex align-items-center justify-content-end">
                <button type="submit" className="cmn__simple">
                  <span>Send</span>
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonDetails;