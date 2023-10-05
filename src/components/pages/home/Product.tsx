"use client";
import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import { StaticImageData } from "next/image";
//@ts-ignore
import Link from "next/link";
import { Navigation, Scrollbar } from "swiper";
import ProductSliderCard from "./ProductSliderCard";

type Props = {
  sectionTitle: string;
  componentData: {
    id: string;
    image: StaticImageData;
    productTitle: string;
    productPrice: number;
    name: string;
  }[];
};
const Product = ({ sectionTitle, componentData }: Props) => {
  return (
    // <!--Product section-->
    <section className="product__section pr-24 pl-24 pb-100">
      <div className="container-fluid p-0">
        <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h2>{sectionTitle}</h2>
          <Link
            href="product-details"
            className="view__btn white d-flex align-items-center gap-2"
          >
            View All
            <i className="ti ti-arrow-narrow-right"></i>
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Scrollbar]}
          speed={200}
          spaceBetween={12}
          loop={false}
          // smartspeed={ 1000}
          breakpoints={{
            320: {
              slidesPerView: 1,
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
            {componentData.map(({ id, ...props }) => (
              <SwiperSlide key={id}>
                <ProductSliderCard {...props} />
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

export default Product;
