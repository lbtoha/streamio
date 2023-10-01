"use client";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

const CreateEventSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const ref = useRef(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;

        setSelectedImage(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    ref.current?.click();
  };

  return (
    <section className="event__section custom__space pr-24 pl-24 pb-80">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="event__createcover">
              <div className="event__coverhead">
                <div className="box text-center">
                  <Image
                    width={1080}
                    height={208}
                    className="profile-pic arrow"
                    src={
                      selectedImage
                        ? selectedImage
                        : "/img/details/coverphoto.jpg"
                    }
                    alt="img"
                  />
                  <div className="thingkin">
                    <i
                      onClick={handleClick}
                      className="ti ti-upload upload-button d-block pra fs-30"
                    ></i>
                    <input
                      ref={ref}
                      onChange={handleChange}
                      className="file-upload mt-10"
                      type="file"
                      placeholder="Event Cover"
                      accept="image //*"
                    />
                    <h4
                      onClick={handleClick}
                      className="white mt-10 upload-button"
                    >
                      Event Cover
                    </h4>
                  </div>
                </div>
              </div>
              <form action="#0" className="cover__form">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label
                        htmlFor="event"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Event Name <span className="base2">*</span>
                      </label>
                      <input type="text" id="event" placeholder="Event Title" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label className="mb-16 fs-18 d-block fw-500 white bodyfont">
                        Event Details <span className="base2">*</span>
                      </label>
                      <select name="event__select">
                        <option value="1">Online</option>
                        <option value="2">Ofline</option>
                        <option value="3">Everyday</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <input type="text" placeholder="URL" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="dat"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Start Date <span className="base2">*</span>
                      </label>
                      <input
                        type="text"
                        id="dat"
                        placeholder="Event Start Date"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="time"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Start Time <span className="base2">*</span>
                      </label>
                      <input
                        type="text"
                        id="time"
                        placeholder="Event Start Time"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="datend"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        End Date <span className="base2">*</span>
                      </label>
                      <input
                        type="text"
                        id="datend"
                        placeholder="Event End Date"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="timeend"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        End Time <span className="base2">*</span>
                      </label>
                      <input type="text" id="timeend" placeholder="12:00am" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label className="mb-16 fs-18 d-block fw-500 white bodyfont">
                        TimeZone <span className="base2">*</span>
                      </label>
                      <select name="event__select">
                        <option value="1">(GHT-11:00) Midway Island</option>
                        <option value="2">(GHT-12:00) Midway Island</option>
                        <option value="3">(GHT-01:00) Midway Island</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label className="mb-16 fs-18 d-block fw-500 white bodyfont">
                        Sell Tickets <span className="base2">*</span>
                      </label>
                      <select name="event__select">
                        <option value="1">No</option>
                        <option value="2">Yes</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label
                        htmlFor="message"
                        className="mb-16 fs-18 d-block fw-500 white bodyfont"
                      >
                        Event Description <span className="base2">*</span>
                      </label>
                      <textarea
                        name="description"
                        id="message"
                        rows="5"
                        placeholder="Type Event Description"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp file__uploadedcover">
                      <label className="mb-16 fs-18 d-block fw-500 white bodyfont">
                        Event Video/Trailer <span className="base2">*</span>
                      </label>
                      <div className="fileupload ralt">
                        <span className="fs-16 fw-400 gap-2 d-grid justify-content-center text-center bodyfont pra">
                          <i className="ti ti-upload fs-30 pra"></i>
                          Select a Video File to import
                        </span>
                        <input type="file" className="up__fileup" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp d-flex justify-content-end">
                      <button type="submit" className="cmn--btn">
                        <span>Publish</span>
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

export default CreateEventSection;
