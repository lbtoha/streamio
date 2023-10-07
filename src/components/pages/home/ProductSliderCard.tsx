import { IconShoppingCartPlus } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  productTitle: string;
  productPrice: number;
  name: string;
};

const ProductSliderCard = ({
  image,
  productPrice,
  productTitle,
  name,
}: Props) => {
  return (
    <div className="swiper-slide round16 p-8">
      <div className="product__item">
        <div className="thumb ralt mb-16 transition overhid">
          <Image src={image} className="w-100 transition overhid" alt="img" />
          <Link
            href="cart"
            className="product__badge text-uppercase fw-500 d-flex align-items-center justify-content-center fs-16 bodyfont white"
          >
            <IconShoppingCartPlus />
            Add To Cart
          </Link>
        </div>
        <div className="content">
          <h5 className="mb-2">
            <Link href="product-details" className="white">
              {productTitle}
            </Link>
          </h5>
          <div className="d-flex align-items-center justify-content-between">
            <span className="fs-14 d-block fw-400 bodyfont base2">
              ${productPrice}
            </span>
            <span className="fs-14 d-block bodyfont fw-500 white">{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSliderCard;
