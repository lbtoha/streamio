const PasswordResetForm = () => {
  return (
    <section className="signin__section pr-24 pl-24 pb-80">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6">
            <div className="event__createcover checkout__wrapper">
              <h3 className="white white text-center mb-30">Reset Password</h3>
              <form action="#shanta" className="cover__form">
                <div className="row g-4">
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
                    <div className="d-flex">
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
                          I agree to the{" "}
                          <span className="base">Privacy Policy</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp mb-30 sign__inbtn">
                      <button type="submit" className="cmn--btn d-block w-100">
                        <span>Send</span>
                      </button>
                    </div>
                    <p className="ffs-16 text-center bodyfont white fw-500">
                      We will send a password to your Email
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

export default PasswordResetForm;
