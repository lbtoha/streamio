"use client";
import { handleLinkClick } from "@/utils/handleLinkClick";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitch,
  IconCheck,
  IconMessageMinus,
  IconShare3,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import BlogDetailsThumb from "./BlogDetailsThumb";

const BlogDetailsLeft = () => {
  return (
    <div className="col-lg-8">
      <div className="blog__leftwrap">
        <div className="latest__item overhid ralt">
          {/* <div className="thumb ralt mb-16 transition overhid">
            <Image
              width={942}
              height={509}
              src="/img/blog/blgo-big1.jpg"
              className="w-100 transition overhid h-auto"
              alt="img"
            />
            <AudioPlayer />
            <Link href="#0" className="l__badge">
              Features
            </Link> */}
          <BlogDetailsThumb />
          {/* </div> */}
          <div className="content">
            <div className="d-flex align-items-center justify-content-between">
              <span className="cmn__date ralt fw-500 bodyfont fs-14 base2 d-block mb-16">
                March 17, 2023
              </span>
              <Link
                href="#0"
                className="d-flex white w-500 bodyfont align-items-center gap-3"
              >
                <IconMessageMinus className="base fs-20" />
                15
              </Link>
            </div>
            <h2 className="mb-10">
              <Link href="#0" className="white">
                How Podcast Helps You to Gather Your Audience in a Platform
              </Link>
            </h2>
            <p className="fs-16 fw-400 mb-10 bodyfont pra">
              Music has an extraordinary power to touch our souls and transcend
              barriers, bringing people together from all walks of life. It is
              an art form that has been an integral part of human civilization
              since time immemorial. Whether it&apos;s the rhythmic beats of a
              drum, the soothing melody of a violin, or the soulful lyrics of a
              song, music has a unique way of evoking emotions and creating
              unforgettable memories.
            </p>
            <p className="fs-16 fw-400 bodyfont pra">
              Throughout history, music has played a crucial role in shaping
              cultures, expressing emotions, and even fueling revolutions. From
              classical compositions that echo the genius of legendary composers
              like Beethoven and Mozart to the revolutionary sounds of rock and
              roll that defined an entire generation.
            </p>
            <p className="fs-20 pragraph__bold fw-500 bodyfont white">
              As music continues to evolve, it also shapes the world around us.
              It inspires movements for change, spreads messages of love and
              unity, and serves as a medium for artists to express their deepest
              thoughts and emotions.
            </p>
            <p className="fs-16 fw-400 mb-30 bodyfont pra">
              The joy of music goes beyond mere entertainment; it has
              therapeutic properties too. Music therapy has been shown to have
              positive effects on mental health, reducing stress and anxiety,
              and even aiding in the recovery of patients. It serves as a
              universal language that connects people regardless of language or
              cultural barriers.
            </p>
            <h3 className="white mb-24">
              Soundscapes of Emotion: Exploring the Depths of Music
            </h3>
            <div className="d-flex emotion__thumb mb-10 align-items-center">
              <Image
                width={528}
                height={350}
                src="/img/blog/emotion2.jpg"
                alt="img"
              />
              <Image
                width={528}
                height={350}
                src="/img/blog/emotion1.jpg"
                alt="img"
              />
            </div>
            <p className="fs-16 fw-400 mb-24 bodyfont pra">
              The joy of music goes beyond mere entertainment; it has
              therapeutic properties too. Music therapy has been shown to have
              positive effects on mental health, reducing stress and anxiety,
              and even aiding in the recovery of patients. It serves as a
              universal language that connects people regardless of language or
              cultural barriers.
            </p>
            <ul className="emotion__list d-flex flex-wrap">
              <li className="d-flex align-items-center fs-16 fw-500 bodyfont white">
                <IconCheck />
                Rediscovering Music&apos;s Purest Form
              </li>
              <li className="d-flex align-items-center fs-16 fw-500 bodyfont white">
                <IconCheck />
                Symphonic Sojourn
              </li>
              <li className="d-flex align-items-center fs-16 fw-500 bodyfont white">
                <IconCheck />
                The Universal Language of Music
              </li>
              <li className="d-flex align-items-center fs-16 fw-500 bodyfont white">
                <IconCheck />
                How Music Shapes Our Perceptions
              </li>
              <li className="d-flex align-items-center fs-16 fw-500 bodyfont white">
                <IconCheck />
                Rhythm and Melody: The Heartbeat of Music
              </li>
              <li className="d-flex align-items-center fs-16 fw-500 bodyfont white">
                <IconCheck />
                Dancing to the Embracing the Joy of Music
              </li>
            </ul>
            <p className="fs-16 fw-400 mt-10 mb-60 bodyfont pra">
              So, whether you&apos;re an avid music lover or just beginning to
              explore its wonders, open your heart and let the magic of music
              take you on a journey of self-discovery and connection. Immerse
              yourself in the symphony of sounds and let the rhythm of life
              guide your steps.
            </p>
            <div className="tag__boxes mb-60 d-flex align-items-center">
              <ul className="tag d-flex align-items-center">
                <li className="fs-24 me-1 fw-400 white headfont">Tag:</li>
                <li>
                  <Link href="#0" className="tagbtn white fs-14">
                    Graphic River
                  </Link>
                </li>
                <li>
                  <Link href="#0" className="tagbtn white fs-14">
                    Graphic River
                  </Link>
                </li>
                <li>
                  <Link href="#0" className="tagbtn white fs-14">
                    Graphic River
                  </Link>
                </li>
              </ul>
              <ul className="tag d-flex align-items-center">
                <li className="fs-24 me-1 fw-400 white headfont">Share:</li>
                <li>
                  <Link href="#0" className="sicon white">
                    <IconBrandFacebook className="pra fz-24" />
                  </Link>
                </li>
                <li>
                  <Link href="#0" className="sicon white">
                    <IconBrandTwitch className="pra fz-24" />
                  </Link>
                </li>
                <li>
                  <Link href="#0" className="sicon white">
                    <IconBrandInstagram className="pra fz-24" />
                  </Link>
                </li>
              </ul>
            </div>
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
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
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
            <form action="#0" className="main__comment mt-40">
              <textarea
                name="comment"
                id="comment"
                className="mb-30"
                rows={5}
                placeholder="Add Comment"
              ></textarea>
              <span className="w-100 d-flex align-items-center justify-content-end">
                <button
                  type="submit"
                  aria-label="submit"
                  className="cmn__simple"
                >
                  <span>Send</span>
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsLeft;
