"use client";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import CartRow from "./CartRow";

const ProductDetails = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart.value);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.productPrice * item.quantity!,
    0
  );
  return (
    // <!--product Details-->
    <section className="cart__section pb-80 pr-24 pl-24">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="cart__wrapper">
              <table className="table align-middle w-100 ">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody className="">
                  {cartItems.map(({ ...props }) => (
                    <CartRow key={uuidv4()} {...props} />
                  ))}
                </tbody>
              </table>
              <div className="coupon__codedwrap d-flex">
                <div className="coupon__code d-flex align-items-center">
                  <form
                    action="#0"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <input type="text" placeholder="Enter Coupon Code" />
                    <button type="submit" aria-label="submit button">
                      Apply Coupon
                    </button>
                  </form>
                  <Link href="#0" className="updatcart">
                    Update Cart
                  </Link>
                </div>
                <div className="coupon__price text-center">
                  <span className="cart-total-title">Cart Totals</span>
                  <div className="mt-40 mb-3  bodyfont white cart-subtotal">
                    <span>Subtotal</span> <span>${totalPrice}</span>
                  </div>
                  <div className="mb-40  bodyfont white cart-subtotal">
                    <span>Total</span> <span>${totalPrice}</span>
                  </div>
                  <div className="cart-total"></div>
                  <Link href="checkout" className="cehckout">
                    Checkout
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

export default ProductDetails;
