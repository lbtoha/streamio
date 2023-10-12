"use client";
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  image: StaticImageData;
  name: string;
  quantity: number;
  price: number;
  subTotal: number;
};

const CartRow = ({ image, name, quantity, price, subTotal }: Props) => {
  const [cartItem, setCartItem] = useState(quantity);
  const [itemSubtotal, setSubtotal] = useState(subTotal);

  const cartItemsIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCartItem(cartItem + 1);
  };

  const cartItemsDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (cartItem > 1) {
      setCartItem(cartItem - 1);
    }
  };

  useEffect(() => {
    const calculateSubtotal = () => {
      setSubtotal(cartItem * price);
    };
    return calculateSubtotal();
  }, [cartItem, price]);

  return (
    <tr>
      <td className="thumb__td">
        <Image width={126} height={126} src={image} alt="img" />
        <span className="fs-24 white fw-500 ">{name}</span>
      </td>
      <td className="quantity__td">
        <form action="#0">
          <p className="qty align-items-center">
            <button
              onClick={cartItemsIncrement}
              aria-label="cart item increment button"
              className="qtyplus"
            >
              <IconPlus />
            </button>
            <input
              name="qty"
              id="qty"
              onChange={() => setCartItem}
              value={cartItem}
            />
            <button
              onClick={cartItemsDecrement}
              aria-label="cart item decrement button"
              className="qtyminus"
              aria-hidden="true"
            >
              <IconMinus />
            </button>
          </p>
        </form>
      </td>
      <td>${price}</td>
      <td>
        <span className="d-flex align-items-center gap-3 ">
          <span className="total-amount">${itemSubtotal}</span>
          <Link href="#0" className="iconx">
            <IconX />
          </Link>
        </span>
      </td>
    </tr>
  );
};

export default CartRow;
