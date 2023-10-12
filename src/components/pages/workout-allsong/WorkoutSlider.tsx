"use client";
//@ts-ignore
import { workoutCardData } from "@/../public/data/workoutData";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import { Navigation, Scrollbar } from "swiper";
import MoodsCard from "../home/MoodsCard";

const WorkoutSlider = () => {
  return (
    <section className="genres__section pr-24 pl-24 pb-100">
      <div className="container-fluid">
        <div className="header__text mb-30">
          <h2>Workout</h2>
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
              scrollbar: {
                dragSize: 40,
              },
            },
            575: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 5,
            },
            1600: {
              slidesPerView: 6,
              scrollbar: {
                dragSize: 240,
              },
            },
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
          }}
          navigation={{
            nextEl: ".cmn-button-next2",
            prevEl: ".cmn-button-prev2",
          }}
          className="swiper products__slider"
        >
          <div className="swiper-wrapper">
            {workoutCardData.map(({ id, ...props }) => (
              <SwiperSlide key={id}>
                <div className="swiper-slide">
                  <MoodsCard {...props} link="music-details" />
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="d-flex gap-4 mt-40 align-items-center">
            <div className="gap-1 d-flex">
              <div className="cmn-button-prev2">
                <IconChevronLeft />
              </div>
              <div className="cmn-pagination"></div>
              <div className="cmn-button-next2">
                <IconChevronRight />
              </div>
            </div>
            <div className="swiper-scrollbar"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default WorkoutSlider;
