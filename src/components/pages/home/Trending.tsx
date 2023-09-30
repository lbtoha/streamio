"use client";
import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import { Navigation, Scrollbar } from "swiper";
import { trendingsliderData } from "../../../../public/data/trendingSliderData";
import TrendingSliderCard from "./TrendingSliderCard";

const Trending = () => {
  return (
    // <!--Trending section-->
    <section className="trending__section ralt pr-24 pl-24 pt-100 pb-100">
      <div className="container-fluid p-0">
        <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h2>Trending Songs</h2>
          <a
            href="trending.html"
            className="view__btn white d-flex align-items-center gap-2"
          >
            View All
            <i className="ti ti-arrow-narrow-right"></i>
          </a>
        </div>
        <Swiper
          modules={[Navigation, Scrollbar]}
          speed={200}
          spaceBetween={12}
          loop={true}
          // smartspeed={ 1000}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
            },
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
          }}
          navigation={{
            nextEl: ".cmn-button-next2",
            prevEl: ".cmn-button-prev2",
          }}
          className="swiper trending__slider"
        >
          <div className="swiper-wrapper">
            {trendingsliderData.map(({ id, ...props }) => (
              <SwiperSlide key={id}>
                <TrendingSliderCard {...props} />
              </SwiperSlide>
            ))}
          </div>
          <div className="d-flex gap-4 mt-40 align-items-center">
            <div className="gap-1 d-flex">
              <div className="cmn-button-prev2">
                <i className="ti ti-chevron-left"></i>
              </div>
              <div className="cmn-pagination"></div>
              <div className="cmn-button-next2">
                <i className="ti ti-chevron-right"></i>
              </div>
            </div>
            <div className="swiper-scrollbar"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Trending;