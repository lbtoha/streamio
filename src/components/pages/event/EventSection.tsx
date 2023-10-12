"use client";
import {
  IconCalendarDue,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconPlus,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
//@ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import { Navigation } from "swiper";

const EventSection = () => {
  return (
    <section className="event__section custom__space pr-24 pl-24 pb-80">
      <div className="container-fluid">
        <div className="event__wrapper">
          <div className="event__boxes">
            <div className="d-flex mb-40 align-items-center justify-content-between flex-wrap gap-2">
              <div className="d-flex fs-24 fw-500 bodyfont white align-items-center gap-1">
                <IconCalendarDue className="fs-26" />
                Event
              </div>
              <Link href="create-event" className="fs-18 fw-500 bodyfont white">
                Joined Events
              </Link>
            </div>
            <span className="fs-18 d-block mb-24 fw-400 bodyfont white">
              April
            </span>
            <Swiper
              modules={[Navigation]}
              speed={200}
              spaceBetween={12}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 4,
                },
                575: {
                  slidesPerView: 5,
                },
                900: {
                  slidesPerView: 7,
                },
                1199: {
                  slidesPerView: 7,
                },
                1600: {
                  slidesPerView: 7,
                },
              }}
              navigation={{
                nextEl: ".cmn-button-next2",
                prevEl: ".cmn-button-prev2",
              }}
              className="event__sliderwrap swiper ralt"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide event__slider">
                  <div className="sbox">
                    <h4 className="white bodyfont mb-1">01</h4>
                    <span className="fs-18 fw-400 bodyfont white">Sat</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide event__slider">
                  <div className="sbox">
                    <h4 className="white bodyfont mb-1">02</h4>
                    <span className="fs-18 fw-400 bodyfont white">Sun</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide event__slider">
                  <div className="sbox">
                    <h4 className="white bodyfont mb-1">03</h4>
                    <span className="fs-18 fw-400 bodyfont white">Mon</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide event__slider">
                  <div className="sbox">
                    <h4 className="white bodyfont mb-1">04</h4>
                    <span className="fs-18 fw-400 bodyfont white">Tue</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide event__slider">
                  <div className="sbox">
                    <h4 className="white bodyfont mb-1">05</h4>
                    <span className="fs-18 fw-400 bodyfont white">Wed</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide event__slider">
                  <div className="sbox">
                    <h4 className="white bodyfont mb-1">06</h4>
                    <span className="fs-18 fw-400 bodyfont white">Thu</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide event__slider">
                  <div className="sbox">
                    <h4 className="white bodyfont mb-1">07</h4>
                    <span className="fs-18 fw-400 bodyfont white">Fri</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide event__slider">
                  <div className="sbox">
                    <h4 className="white bodyfont mb-1">01</h4>
                    <span className="fs-18 fw-400 bodyfont white">Sat</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide event__slider">
                  <div className="sbox">
                    <h4 className="white bodyfont mb-1">02</h4>
                    <span className="fs-18 fw-400 bodyfont white">Sun</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide event__slider">
                  <div className="sbox">
                    <h4 className="white bodyfont mb-1">03</h4>
                    <span className="fs-18 fw-400 bodyfont white">Mon</span>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="text-center mt-40 d-flex justify-content-center">
              <Link
                href="create-event"
                className="d-flex create__btn fs-18 fw-400 bodyfont white align-items-center gap-2"
              >
                <IconPlus />
                Create
              </Link>
            </div>
            <div className="gap-1 event__sldebtn d-flex">
              <div className="cmn-button-prev2">
                <IconChevronLeft />
              </div>
              <div className="cmn-button-next2">
                <IconChevronRight />
              </div>
            </div>
          </div>
        </div>
        <div className="browse__events browse__position">
          <div className="browse__boxes">
            <div className="row g-4">
              <div className="col-lg-8 col-md-7">
                <div className="browse__left">
                  <h4 className="white mb-20">Browse Events</h4>
                  <div className="browse__box d-flex align-items-center justify-content-between">
                    <div className="d-flex gap-2 align-items-center">
                      <Image
                        width={56}
                        height={56}
                        src="/img/new-podcast/c6.jpg"
                        alt="img"
                      />
                      <div className="new__event">
                        <span className="fs-16 fw-500 white bodyfont d-block">
                          New Event
                        </span>
                        <span className="fs-12 bodyfont pra fw-400">
                          2023-07-21 {">"} 2023-12-27
                        </span>
                      </div>
                    </div>
                    <Link href="#0" className="event__check">
                      <IconCheck />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="browse__right">
                  <Image
                    width={390}
                    height={232}
                    src="/img/new-podcast/create-hand.jpg"
                    className="w-100 mb-16"
                    alt="img"
                  />
                  <Link
                    href="create-event"
                    className="d-flex create__hand fs-18 fw-400 bodyfont whtie align-items-center gap-3"
                  >
                    <IconPlus className="fs-20" />
                    Create New Event
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
