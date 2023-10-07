const ContactSection = () => {
  return (
    <section className="contact__section 0 pr-24 pl-24 pb-80">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-10">
            <div className="event__createcover checkout__wrapper">
              <h3 className="white white text-center mb-30">Contact Us</h3>
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
                        htmlFor="phones"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Phone No <span className="base2">*</span>
                      </label>
                      <input
                        type="text"
                        id="phones"
                        placeholder="000-111-765"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="subject"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Subject <span className="base2">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Type Your Keyboard"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label
                        htmlFor="message"
                        className="mb-16 message__title fs-30 d-block fw-500 white bodyfont"
                      >
                        Message <span className="base2 fs-20">*</span>
                      </label>
                      <textarea
                        name="description"
                        id="message"
                        rows={5}
                        placeholder="Type Your Keyboard"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp d-flex justify-content-end">
                      <button type="submit" className="cmn--btn">
                        <span>Send</span>
                      </button>
                    </div>
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

export default ContactSection;
