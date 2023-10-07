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
    setCartItem(cartItem - 1);
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
            <button onClick={cartItemsIncrement} className="qtyplus">
              <IconPlus />
            </button>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              max="10"
              step="1"
              value={cartItem}
              defaultValue={cartItem}
            />
            <button
              onClick={cartItemsDecrement}
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
        <span className="d-flex align-items-center gap-3">
          ${itemSubtotal}
          <Link href="#0" className="iconx">
            <IconX />
          </Link>
        </span>
      </td>
    </tr>
  );
};

export default CartRow;
