import { cartItems } from "@/../public/data/cartItems";
import Link from "next/link";
import CartRow from "./CartRow";

const ProductDetails = () => {
  return (
    // <!--product Details-->
    <section className="cart__section pb-80 pr-24 pl-24">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="cart__wrapper">
              <table className="table align-middle w-100">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(({ id, ...props }) => (
                    <CartRow key={id} {...props} />
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
                  {/* <Link href="#0" className="carttoal">
                    Cart Total
                  </Link> */}
                  <span className="cart-total-title">Cart Totals</span>

                  <div className="mt-40 mb-3  bodyfont white cart-subtotal">
                    <span>Subtotal</span> <span>$290.00</span>
                  </div>
                  <div className="mb-40  bodyfont white cart-subtotal">
                    <span>Total</span> <span>$290.00</span>
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
