import { moodsCardData } from "@/../public/data/moodsCardData";
import MoodsCard from "../home/MoodsCard";

const Trending = () => {
  return (
    // <!--genres section-->
    <section className="trending__section hotsong__section pr-24 pl-24 pb-100">
      <div className="trending__selected mb-30 d-flex align-items-center">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
              aria-label="home-tab"
            >
              Mix
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
              aria-label="profile-tab"
            >
              Classic
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              aria-label="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Rock
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tabjozz"
              aria-label="contact-tabjozz"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-panejozz"
              type="button"
              role="tab"
              aria-controls="contact-tab-panejozz"
              aria-selected="false"
            >
              Jozz
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tabother"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-paneother"
              type="button"
              role="tab"
              aria-controls="contact-tab-paneother"
              aria-selected="false"
              aria-label="contact-tabother"
            >
              Other
            </button>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row g-4">
              {moodsCardData.map(({ id, ...props }) => (
                <div
                  key={id}
                  className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4"
                >
                  <MoodsCard {...props} link="album-allsong" />
                </div>
              ))}
              <div className="text-center mt-40">
                <button className="cmn__simple2">Load More</button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="row g-4">
              {moodsCardData.slice(6, 12).map(({ id, ...props }) => (
                <div
                  key={id}
                  className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4"
                >
                  <MoodsCard key={id} {...props} link="album-allsong" />
                </div>
              ))}
              <div className="text-center mt-40">
                <button className="cmn__simple2">Load More</button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="row g-4">
              {moodsCardData.slice(0, 6).map(({ id, ...props }) => (
                <div
                  key={id}
                  className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4"
                >
                  <MoodsCard key={id} {...props} link="album-allsong" />
                </div>
              ))}
              <div className="text-center mt-40">
                <button className="cmn__simple2">Load More</button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-panejozz"
            role="tabpanel"
            aria-labelledby="contact-tabjozz"
          >
            <div className="row g-4">
              {moodsCardData.slice(4, 10).map(({ id, ...props }) => (
                <div
                  key={id}
                  className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4"
                >
                  <MoodsCard key={id} {...props} link="album-allsong" />
                </div>
              ))}
              <div className="text-center mt-40">
                <button className="cmn__simple2">Load More</button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-paneother"
            role="tabpanel"
            aria-labelledby="contact-tabother"
          >
            <div className="row g-4">
              {moodsCardData.slice(6, 12).map(({ id, ...props }) => (
                <div
                  key={id}
                  className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4"
                >
                  <MoodsCard key={id} {...props} link="album-allsong" />
                </div>
              ))}
              <div className="text-center mt-40">
                <button className="cmn__simple2">Load More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
