"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
const ContactSection = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      // create a account in https://www.emailjs.com/
      // follow there documentation get "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID",  "YOUR_PUBLIC_KEY"
      // in "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID",  "YOUR_PUBLIC_KEY"  replace it with actual contents
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        // @ts-ignore
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Send Successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Message Not Send!");
        }
      );
  };
  return (
    <section className="contact__section 0 pr-24 pl-24 pb-80">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-10">
            <div className="event__createcover checkout__wrapper">
              <h3 className="white white text-center mb-30">Contact Us</h3>
              <form ref={form} onSubmit={sendEmail} className="cover__form">
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
                      <button
                        type="submit"
                        aria-label="submit button"
                        className="cmn--btn"
                      >
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
