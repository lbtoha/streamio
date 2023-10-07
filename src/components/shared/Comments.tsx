import { IconShare3 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Comments = () => {
  return (
    <section className=" pr-24 pl-24 pb-100">
      <div className="container-flud p-0">
        <div className="row mt-40">
          <div className="col-lg-7">
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
                      Melodies of Emotion&ldquo; is a mesmerizing instrumental
                      album brought to life by the talented Harmony Ensemble.
                      collection takes listeners on an enchanting journey
                      through a variety of emotions, skillfully conveyed through
                      a blend of classical and contemporary musical elements.
                      The absence of lyrics allows to speak directly to the
                      invoking vivid imagery and stirring sentiments.
                    </p>
                    <div className="comment__boxcontent mt-16">
                      <div className="feedback__content d-flex align-items-center justify-content-end">
                        <Link
                          href="#"
                          className="reply cmbtn base fs-16 bodyfont d-flex align-items-center gap-2"
                        >
                          <IconShare3 className="fs-24" />
                          <span className="white fs-14">Reply</span>
                        </Link>
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
                      Melodies of Emotion&ldquo; is a mesmerizing instrumental
                      album brought to life by the talented Harmony Ensemble.
                      collection takes listeners on an enchanting journey
                      through a variety of emotions.
                    </p>
                    <div className="comment__boxcontent mt-16">
                      <div className="feedback__content d-flex align-items-center justify-content-end">
                        <Link
                          href="#"
                          className="reply cmbtn base fs-16 bodyfont d-flex align-items-center gap-2"
                        >
                          <IconShare3 className="fs-24" />
                          <span className="white fs-14">Reply</span>
                        </Link>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
