"use client";
import {
  IconChevronDown,
  IconChevronUp,
  IconHeart,
  IconShoppingCartPlus,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//@ts-ignore
import { Navigation, Thumbs } from "swiper";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductDetailsSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const quantityIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };
  const quantityDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className="product__details custom__space pr-24 pl-24">
      <div className="container-fluid p-0">
        <div className="row g-4 align-items-center mb-60">
          <div className="col-lg-6">
            <div className="product__detailsthumb">
              <div className="slide__small overhid">
                <Swiper
                  //@ts-ignore
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  watchSlidesProgress={true}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                    },
                    420: {
                      slidesPerView: 2,
                    },
                  }}
                  className="swiper mySwiper"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <Image
                        width={114}
                        height={114}
                        src="/img/blog/gadge1.jpg"
                        alt="img"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image
                        width={114}
                        height={114}
                        src="/img/blog/gadge2.jpg"
                        alt="img"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image
                        width={114}
                        height={114}
                        src="/img/blog/gadge3.jpg"
                        alt="img"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image
                        width={114}
                        height={114}
                        src="/img/blog/gadge4.jpg"
                        alt="img"
                      />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
              <div className="slide__big overhid">
                <Swiper
                  modules={[Thumbs, Navigation]}
                  loop={true}
                  spaceBetween={10}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  thumbs={{
                    swiper:
                      //@ts-ignore
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  className="swiper mySwiper2"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <Image
                        width={666}
                        height={528}
                        src="/img/blog/pro-guitar.jpg"
                        alt="img"
                        className="slider-image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image
                        width={666}
                        height={528}
                        src="/img/blog/pro-guitar.jpg"
                        alt="img"
                        className="slider-image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image
                        width={666}
                        height={528}
                        src="/img/blog/pro-guitar.jpg"
                        alt="img"
                        className="slider-image"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image
                        width={666}
                        height={528}
                        src="/img/blog/pro-guitar.jpg"
                        alt="img"
                        className="slider-image"
                      />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product__detailscontent">
              <h2 className="white mb-16">Guitar ZR-975</h2>
              <ul className="rated mb-20 d-flex align-items-center gap-1">
                <li>
                  <IconStarFilled className="base2" />
                </li>
                <li>
                  <IconStarFilled className="base2" />
                </li>
                <li>
                  <IconStarFilled className="base2" />
                </li>

                <li>
                  <IconStar className="base2" />
                </li>
                <li>
                  <IconStar className="base2" />
                </li>

                <li className="fs-14 ms-2 pra fw-500 bodyfont">( 3 Reviews)</li>
              </ul>
              <span className="fs-24 d-flex align-items-center gap-1 fw-500 bodyfont white">
                <span className="pra fs-20 fw-400">$60.00</span>$45.00
              </span>
              <p className="fs-16 pra bodyfont mb-10">
                As music continues to evolve, it also shapes the world around
                us. It inspires movements for change, spreads messages of love
                and unity, and serves as a medium for artists to express their
                deepest thoughts and emotions.
              </p>
              <p className="fs-16 pra bodyfont mb-30">
                The joy music goes beyond mere it has therapeutic properties
                too. Music therapy have positive effects on mental health.
              </p>
              <div className="pro__detail__button d-flex align-items-center">
                <form action="#0">
                  <p className="qty d-flex align-items-center">
                    <input
                      // type="number"
                      name="qty"
                      id="qty"
                      min="1"
                      onChange={() => setQuantity}
                      value={quantity}
                    />
                    <span className="d-grid updownicon align-items-center">
                      <button
                        onClick={quantityIncrement}
                        className="qtyminus"
                        aria-hidden="true"
                        aria-label="button"
                      >
                        <IconChevronUp />
                      </button>
                      <button
                        onClick={quantityDecrement}
                        className="qtyplus"
                        aria-hidden="true"
                        aria-label="button"
                      >
                        <IconChevronDown />
                      </button>
                    </span>
                  </p>
                </form>
                <Link href="#0" className="buybtn gap-3">
                  <IconShoppingCartPlus />
                  Buy Now
                </Link>
                <Link href="#0" className="buybtn2">
                  <IconHeart className="fs-26" />
                </Link>
              </div>
              <div className="por__categoris mt-30">
                <span className="fs-18 mb-16 d-flex align-items-center gap-3 fw-500 bodyfont white">
                  Categories:
                  <span className="fs-16 pra">Design, Illustration</span>
                </span>
                <span className="fs-18 mb-16 d-flex align-items-center gap-3 fw-500 bodyfont white">
                  Tag:
                  <span className="fs-16 pra">
                    Business, Commercial, Trends
                  </span>
                </span>
                <span className="fs-18 d-flex align-items-center gap-3 fw-500 bodyfont white">
                  Product ID:
                  <span className="fs-16 pra">12447</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10 mb-60">
          <div className="reviews mt-60">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                  aria-label="home-tab"
                >
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                  aria-label="profile-tab"
                >
                  Reviews (01)
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="review__body">
                  <p className="fs-16 fw-400 bodyfont pra mt-18">
                    Music has an extraordinary power to touch our souls and
                    transcend barriers, bringing people together from all walks
                    of life. It is an art form that has been an integral part of
                    human civilization since time immemorial. Whether it&apos;s
                    the rhythmic beats of a drum, the soothing melody of a
                    violin, or the soulful lyrics of a song, music has a unique
                    way of evoking emotions and creating unforgettable memories.
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="review__body">
                  <span className="fs-20 fw-500 d-block mb-20 bodyfont white">
                    01 review for guitar ZR-975
                  </span>
                  <div className="author__attach  d-flex">
                    <div className="author">
                      <Image
                        width={44}
                        height={44}
                        src="/img/details/listen3.png"
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
                        through a variety of emotions, skillfully conveyed
                        through a blend of classical and contemporary musical
                        elements. The absence of lyrics allows to speak directly
                        to the invoking vivid imagery and stirring sentiments.
                      </p>
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

export default ProductDetailsSection;
