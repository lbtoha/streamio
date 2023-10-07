import Link from "next/link";

const Checkout = () => {
  return (
    <section className="checkout__section pr-24 pl-24 pb-80">
      <div className="container">
        <div className="event__createcover checkout__wrapper">
          <div className="row g-4">
            <div className="col-lg-8">
              <h3 className="white white mb-30">Billing Address</h3>
              <form action="#shanta" className="cover__form">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label
                        htmlFor="event"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Full Name <span className="base2">*</span>
                      </label>
                      <input type="text" id="event" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label
                        htmlFor="eemail"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Email Address <span className="base2">*</span>
                      </label>
                      <input type="email" id="eemail" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="country"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Country <span className="base2">*</span>
                      </label>
                      <input
                        type="text"
                        id="country"
                        placeholder="Type your Keyboard"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="town"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Town/City <span className="base2">*</span>
                      </label>
                      <input type="text" id="town" placeholder="Town/City" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="datend"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Phone Number <span className="base2">*</span>
                      </label>
                      <input type="text" id="datend" placeholder="Number" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="timeend"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Zip Code <span className="base2">*</span>
                      </label>
                      <input type="text" id="timeend" placeholder="Code" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="checkout__account d-flex align-items-center">
                      <div className="pay__check mb-16 d-flex align-items-center gap-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label mt-1 fs-16 fw-400 bodyfont pra"
                          htmlFor="flexCheckDefault"
                        >
                          Create a new account?
                        </label>
                      </div>
                      <div className="pay__check mb-16 d-flex align-items-center gap-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault2"
                        />
                        <label
                          className="form-check-label mt-1 fs-16 fw-400 bodyfont pra"
                          htmlFor="flexCheckDefault2"
                        >
                          Ship to a different address
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label
                        htmlFor="message"
                        className="mb-16 message__title fs-30 d-block fw-500 white bodyfont"
                      >
                        Additional Information{" "}
                        <span className="base2 fs-20">*</span>
                      </label>
                      <textarea
                        name="description"
                        id="message"
                        rows={5}
                        placeholder="Order Notes"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="order__side">
                <h3 className="white mb-30">Your Orders</h3>
                <div className="order__boxes mb-40">
                  <div className="d-flex orborder mb-24 pb-10 align-items-center justify-content-between">
                    <span className="fs-18 fw-500 d-block bodyfont white">
                      Product
                    </span>
                    <span className="fs-18 fw-500 d-block bodyfont white">
                      Total
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-10 justify-content-between">
                    <span className="pra fs-16 fw-400 bodyfont">
                      Microphone R4
                    </span>
                    <span className="pra fs-16 fw-400 bodyfont">$75.80</span>
                  </div>
                  <div className="d-flex align-items-center orborder mb-24 pb-10 justify-content-between">
                    <span className="pra fs-16 fw-400 bodyfont">
                      Music Blammk
                    </span>
                    <span className="pra fs-16 fw-400 bodyfont">$40.70</span>
                  </div>
                  <div className="d-flex align-items-center mb-10 justify-content-between">
                    <span className="pra fs-16 fw-400 bodyfont">Sub Total</span>
                    <span className="pra fs-16 fw-400 bodyfont">$116.10</span>
                  </div>
                  <div className="d-flex align-items-center orborder mb-10 pb-10 justify-content-between">
                    <span className="pra fs-16 fw-400 bodyfont">Shoping</span>
                    <span className="pra fs-16 fw-400 bodyfont">
                      Free shaping
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fs-18 fw-500 d-block bodyfont white">
                      Total
                    </span>
                    <span className="fs-18 fw-500 d-block bodyfont white">
                      $116.10
                    </span>
                  </div>
                </div>
                <h3 className="white mb-30">Payment Method</h3>
                <div className="payment__check mb-40">
                  <div className="pay__check mb-16 d-flex align-items-center gap-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fs-16 fw-400 bodyfont pra"
                      htmlFor="flexCheckDefault"
                    >
                      Direct Bank Transfer
                    </label>
                  </div>
                  <div className="pay__check mb-16 d-flex align-items-center gap-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault2"
                    />
                    <label
                      className="form-check-label fs-16 fw-400 bodyfont pra"
                      htmlFor="flexCheckDefault2"
                    >
                      Paypal
                    </label>
                  </div>
                  <div className="pay__check d-flex align-items-center gap-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault3"
                    />
                    <label
                      className="form-check-label fs-16 fw-400 bodyfont pra"
                      htmlFor="flexCheckDefault3"
                    >
                      Payoneer
                    </label>
                  </div>
                </div>
                <Link href="#0" className="cmn--btn ms-1">
                  <span>Place Order</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
