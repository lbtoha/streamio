"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//@ts-ignore
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    // <!--banner section-->
    <section className="banner__v1 banner__space mr-24 ml-24">
      <div className="container-fluid p-0">
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="swiper mySwiper22">
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
                className="swiper-wrapper"
              >
                <SwiperSlide className="banner__slide swiper-slide d-flex align-items-center bn__thumb1">
                  <div className="banner__content">
                    <h1 className="mb-24">
                      Streamio Where Music Comes to Life
                    </h1>
                    <p className="fs-16 pra2 mb-40">
                      Music has a way of touching our souls and evoking emotions
                      that words alone cannot express. Songs have the power to
                      transport us to different times and places
                    </p>
                    <div className="banner__btn ps-1 d-flex align-items-center">
                      <Link href="signin" className="cmn--btn">
                        <span>Buy Now</span>
                      </Link>
                      <Link href="trending" className="cmn--btn cmn--btntwo">
                        <span>Explore</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="banner__slide swiper-slide d-flex align-items-center bn__thumb2">
                  <div className="banner__content">
                    <h1 className="mb-24">
                      Streamio Where Music Comes to Life
                    </h1>
                    <p className="fs-16 pra2 mb-40">
                      Music has a way of touching our souls and evoking emotions
                      that words alone cannot express. Songs have the power to
                      transport us to different times and places
                    </p>
                    <div className="banner__btn ps-1 d-flex align-items-center">
                      <Link href="signin" className="cmn--btn">
                        <span>Buy Now</span>
                      </Link>
                      <Link href="trending" className="cmn--btn cmn--btntwo">
                        <span>Explore</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="banner__slide swiper-slide d-flex align-items-center bn__thumb3">
                  <div className="banner__content">
                    <h1 className="mb-24">
                      Streamio Where Music Comes to Life
                    </h1>
                    <p className="fs-16 pra2 mb-40">
                      Music has a way of touching our souls and evoking emotions
                      that words alone cannot express. Songs have the power to
                      transport us to different times and places
                    </p>
                    <div className="banner__btn ps-1 d-flex align-items-center">
                      <Link href="signin" className="cmn--btn">
                        <span>Buy Now</span>
                      </Link>
                      <Link href="trending" className="cmn--btn cmn--btntwo">
                        <span>Explore</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="banner__slide swiper-slide d-flex align-items-center bn__thumb4">
                  <div className="banner__content">
                    <h1 className="mb-24">
                      Streamio Where Music Comes to Life
                    </h1>
                    <p className="fs-16 pra2 mb-40">
                      Music has a way of touching our souls and evoking emotions
                      that words alone cannot express. Songs have the power to
                      transport us to different times and places
                    </p>
                    <div className="banner__btn ps-1 d-flex align-items-center">
                      <Link href="signin" className="cmn--btn">
                        <span>Buy Now</span>
                      </Link>
                      <Link href="trending" className="cmn--btn cmn--btntwo">
                        <span>Explore</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="bn__navigationnew gap-1 d-flex align-items-center">
                <div className="swiper-button-next">
                  <IconChevronLeft />
                </div>
                <div className="swiper-button-prev">
                  <IconChevronRight />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="swiper mySwiper1">
              <Swiper
                //@ts-ignore
                onSwiper={setThumbsSwiper}
                modules={[FreeMode]}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                freeMode={true}
                watchSlidesProgress={true}
                className="swiper-wrapper"
              >
                <SwiperSlide className="swiper-slide side__thumbs__custom">
                  <Image
                    width={700}
                    height={520}
                    src="/img/bn/side2.jpg"
                    alt="img"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide side__thumbs__custom">
                  <Image
                    width={700}
                    height={520}
                    src="/img/bn/side3.jpg"
                    alt="img"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide side__thumbs__custom">
                  <Image
                    width={700}
                    height={520}
                    src="/img/bn/side4.jpg"
                    alt="img"
                  />
                </SwiperSlide>
                <div className="swiper-slide side__thumbs__custom">
                  <Image
                    width={700}
                    height={520}
                    src="/img/bn/side1.jpg"
                    alt="img"
                  />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
    //<!--banner section-->
  );
};

export default Banner;
