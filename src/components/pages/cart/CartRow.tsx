"use client";
import {
  cartUpdate,
  decreaseItem,
  increaseItem,
  removeItem,
} from "@/redux/features/cart-slich";
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  id: number;
  image: StaticImageData;
  productTitle: string;
  quantity: number;
  productPrice: number;
  subTotal: number;
};

const CartRow = ({
  id,
  image,
  productTitle,
  quantity,
  productPrice,
  subTotal,
}: Props) => {
  const [cartItem, setCartItem] = useState(quantity);
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="thumb__td">
        <Image width={126} height={126} src={image} alt="img" />
        <span className="fs-24 white fw-500 ">{productTitle}</span>
      </td>
      <td className="quantity__td">
        <form action="#0">
          <p className="qty align-items-center">
            <button
              onClick={() => {
                dispatch(increaseItem(id));
                dispatch(cartUpdate(id));
              }}
              aria-label="cart item increment button"
              className="qtyplus"
            >
              <IconPlus />
            </button>
            <input
              name="qty"
              id="qty"
              onChange={() => setCartItem}
              value={quantity <= 9 ? `0${quantity}` : quantity}
            />
            <button
              onClick={() => {
                dispatch(decreaseItem(id));
                dispatch(cartUpdate(id));
              }}
              aria-label="cart item decrement button"
              className="qtyminus"
              aria-hidden="true"
            >
              <IconMinus />
            </button>
          </p>
        </form>
      </td>
      <td>${productPrice}</td>
      <td>
        <span className="d-flex align-items-center gap-3 ">
          <span className="total-amount">${subTotal}</span>
          <Link
            href="#0"
            className="iconx"
            onClick={() => dispatch(removeItem(id))}
          >
            <IconX />
          </Link>
        </span>
      </td>
    </tr>
  );
};

export default CartRow;
