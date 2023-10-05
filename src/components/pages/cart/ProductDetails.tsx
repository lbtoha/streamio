import Image from "next/image";
import Link from "next/link";

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
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="thumb__td">
                      <Image
                        width={126}
                        height={126}
                        src="/img/product/micriphone.jpg"
                        alt="img"
                      />
                      <span className="fs-24 white fw-500 ">Microphone R4</span>
                    </td>
                    <td className="quantity__td">
                      <form action="#0">
                        <p className="qty align-items-center">
                          <button className="qtyplus" aria-hidden="true">
                            <i className="ti ti-plus"></i>
                          </button>
                          <input
                            type="number"
                            name="qty"
                            id="qty"
                            min="1"
                            max="10"
                            step="1"
                            value="01"
                          />
                          <button className="qtyminus" aria-hidden="true">
                            <i className="ti ti-minus"></i>
                          </button>
                        </p>
                      </form>
                    </td>
                    <td>$75.80</td>
                    <td>
                      <span className="d-flex align-items-center gap-3">
                        $75.80{" "}
                        <Link href="#0" className="iconx">
                          <i className="ti ti-x"></i>
                        </Link>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="thumb__td">
                      <Image
                        width={126}
                        height={126}
                        src="/img/product/musicblank.jpg"
                        alt="img"
                      />
                      <span className="fs-24 white fw-500 ">Microphone R4</span>
                    </td>
                    <td className="quantity__td">
                      <form action="#0">
                        <p className="qty align-items-center">
                          <button className="qtyplus" aria-hidden="true">
                            <i className="ti ti-plus"></i>
                          </button>
                          <input
                            type="number"
                            name="qty"
                            id="qty"
                            min="1"
                            max="10"
                            step="1"
                            value="01"
                          />
                          <button className="qtyminus" aria-hidden="true">
                            <i className="ti ti-minus"></i>
                          </button>
                        </p>
                      </form>
                    </td>
                    <td>$40.70</td>
                    <td>
                      <span className="d-flex align-items-center gap-3">
                        $40.70{" "}
                        <Link href="#0" className="iconx">
                          <i className="ti ti-x"></i>
                        </Link>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="thumb__td">
                      <Image
                        width={126}
                        height={126}
                        src="/img/product/microphoner.jpg"
                        alt="img"
                      />
                      <span className="fs-24 white fw-500 ">Microphone R4</span>
                    </td>
                    <td className="quantity__td">
                      <form action="#0">
                        <p className="qty align-items-center">
                          <button className="qtyplus" aria-hidden="true">
                            <i className="ti ti-plus"></i>
                          </button>
                          <input
                            type="number"
                            name="qty"
                            id="qty"
                            min="1"
                            max="10"
                            step="1"
                            value="01"
                          />
                          <button className="qtyminus" aria-hidden="true">
                            <i className="ti ti-minus"></i>
                          </button>
                        </p>
                      </form>
                    </td>
                    <td>$75.80</td>
                    <td>
                      <span className="d-flex align-items-center gap-3">
                        $75.80{" "}
                        <Link href="#0" className="iconx">
                          <i className="ti ti-x"></i>
                        </Link>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="coupon__codedwrap d-flex">
                <div className="coupon__code d-flex align-items-center">
                  <form
                    action="#0"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <input type="text" placeholder="Enter Coupon Code" />
                    <button type="submit">Apply Coupon</button>
                  </form>
                  <Link href="#0" className="updatcart">
                    Update Cart
                  </Link>
                </div>
                <div className="coupon__price text-center">
                  <Link href="#0" className="carttoal">
                    Cart Total
                  </Link>
                  <span className="fs-24 d-block mt-60 mb-60 fw-600 bodyfont white">
                    $75..00
                  </span>
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
