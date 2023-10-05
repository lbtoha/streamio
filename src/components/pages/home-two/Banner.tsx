"use client";
import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";

const Banner = () => {
  return (
    <section className="banner__v2 banner__space mr-24 ml-24">
      <div className="container-fluid p-0">
        <div className="row">
          <Swiper
            modules={[Autoplay, Pagination]}
            speed={400}
            spaceBetween={12}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".cmn-pagination",
              clickable: true,
            }}
            className="swiper bn__slideversion__one"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="banner__slidetwo swiper-slide d-flex align-items-center bn__thumbv1">
                <div className="banner__content banner__contenttwo">
                  <h1 className="mb-24">Streamio Where Music Comes to Life</h1>
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
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner__slidetwo swiper-slide d-flex align-items-center bn__thumbv2">
                <div className="banner__content banner__contenttwo">
                  <h1 className="mb-24">Streamio Where Music Comes to Life</h1>
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
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner__slidetwo swiper-slide d-flex align-items-center bn__thumbv3">
                <div className="banner__content banner__contenttwo">
                  <h1 className="mb-24">Streamio Where Music Comes to Life</h1>
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
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner__slidetwo swiper-slide d-flex align-items-center bn__thumbv4">
                <div className="banner__content banner__contenttwo">
                  <h1 className="mb-24">Streamio Where Music Comes to Life</h1>
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
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div className="bn__pagis">
              <div className="cmn-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
