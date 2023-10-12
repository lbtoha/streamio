"use client";
import EventSelectBox from "@/components/shared/EventSelectBox";
import { IconUpload } from "@tabler/icons-react";
import Image from "next/image";

const CreateEventSection = () => {
  const eventSelection = [
    { label: "Online" },
    { label: "Ofline" },
    { label: "Everyday" },
  ];

  const timeSelection = [
    { label: "(GHT-11:00) Midway Island" },
    { label: "(GHT-12:00) Midway Island" },
    { label: "(GHT-01:00) Midway Island" },
  ];

  const ticketsSelection = [{ label: "Yes" }, { label: "No" }];

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
                    src="/img/details/coverphoto.jpg"
                    alt="img"
                  />
                  <div className="thingkin">
                    <IconUpload className="upload-button d-block pra fs-30" />
                    <input
                      className="file-upload mt-10"
                      type="file"
                      placeholder="Event Cover"
                      accept="image //*"
                    />
                    <h4 className="white mt-10 upload-button">Event Cover</h4>
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
                      <EventSelectBox options={eventSelection} />
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
                      <EventSelectBox options={timeSelection} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp">
                      <label className="mb-16 fs-18 d-block fw-500 white bodyfont">
                        Sell Tickets <span className="base2">*</span>
                      </label>
                      <EventSelectBox options={ticketsSelection} />
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
                        rows={5}
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
                          <IconUpload className="fs-30 pra" />
                          Select a Video File to import
                        </span>
                        <input type="file" className="up__fileup" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp d-flex justify-content-end">
                      <button
                        type="submit"
                        aria-label="submit button"
                        className="cmn--btn"
                      >
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
