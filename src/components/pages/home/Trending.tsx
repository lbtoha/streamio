"use client";
import { StaticImageData } from "next/image";
//@ts-ignore
import {
  IconArrowNarrowRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import { Navigation, Scrollbar } from "swiper";

type Props = {
  classList?: string;
  sectionTitle: string;
  children: (props: {
    image: StaticImageData;
    title: string;
    location: string;
    listeners: number;
  }) => ReactNode;
  sliderData: {
    id: string;
    image: StaticImageData;
    title: string;
    location: string;
    listeners: number;
  }[];
};
const Trending = ({ classList, sectionTitle, sliderData, children }: Props) => {
  return (
    // <!--Trending section-->
    <section
      className={`trending__section ralt pr-24 pl-24 pt-100 pb-100 ${classList}`}
    >
      <div className="container-fluid p-0">
        <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h2>{sectionTitle}</h2>
          <Link
            href="trending"
            className="view__btn white d-flex align-items-center gap-2"
          >
            View All
            <IconArrowNarrowRight />
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Scrollbar]}
          speed={200}
          spaceBetween={12}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              scrollbar: {
                dragSize: 40,
              },
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
              scrollbar: {
                dragSize: 240,
              },
            },
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
            draggable: true,
          }}
          navigation={{
            nextEl: ".cmn-button-next2",
            prevEl: ".cmn-button-prev2",
          }}
          className="swiper trending__slider"
        >
          <div className="swiper-wrapper">
            {sliderData.map(({ id, ...props }) => (
              <SwiperSlide key={id}>{children({ ...props })}</SwiperSlide>
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

export default Trending;
