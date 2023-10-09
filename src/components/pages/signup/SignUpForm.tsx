import Link from "next/link";

const SignUpForm = () => {
  return (
    <section className="signin__section pr-24 pl-24 pb-80">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6">
            <div className="event__createcover checkout__wrapper">
              <h3 className="white white text-center mb-30">Sign Up</h3>
              <form action="#shanta" className="cover__form">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label
                        htmlFor="namess"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Full Name <span className="base2">*</span>
                      </label>
                      <input type="email" id="namess" placeholder="Name" />
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
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label
                        htmlFor="phones"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Password <span className="base2">*</span>
                      </label>
                      <input
                        type="text"
                        id="phones"
                        placeholder="Type Your Password"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                      <div className="pay__check remember__radio mb-16 d-flex align-items-center gap-3">
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
                          Remember me
                        </label>
                      </div>
                      <Link href="#0" className="base fs-14 fw-500 bodyfont">
                        Forget Password?
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp mb-30 sign__inbtn">
                      <button
                        type="submit"
                        aria-label="submit button"
                        className="cmn--btn d-block w-100"
                      >
                        <span>Sign Up Now</span>
                      </button>
                    </div>
                    <p className="ffs-16 text-center bodyfont pra fw-500">
                      Don’t have an account?{" "}
                      <Link href="signin" className="base">
                        Sing In now!
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
