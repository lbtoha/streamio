import { topSongData } from "../../../../public/data/topSongData";
import MoodsCard from "../home/MoodsCard";

const MusicSection = () => {
  return (
    <section className="trending__section hotsong__section pr-24 pl-24 pb-100">
      <div className="trending__selected mb-30 d-flex align-items-center justify-content-between">
        <div className="select__lefts d-flex align-items-center">
          <form
            action="#0"
            className="d-flex align-items-center justify-content-between"
          >
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i className="ti ti-search"></i>
            </button>
          </form>
          <select name="artists">
            <option value="1">All Artists</option>
            <option value="1">New Artists</option>
            <option value="1">Expert Artists</option>
          </select>
          <select name="genres">
            <option value="1">All Artists</option>
            <option value="1">New Artists</option>
            <option value="1">Expert Artists</option>
          </select>
        </div>
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
            >
              Featured
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
            >
              Popular
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Newest
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
            tabindex="0"
          >
            <div className="row g-4">
              {topSongData.map(({ id, ...props }) => (
                <div
                  key={id}
                  className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4"
                >
                  <MoodsCard key={id} {...props} link="albumb-allsong" />
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <div className="row g-4">
              {topSongData.slice(4, 10).map(({ id, ...props }) => (
                <div
                  key={id}
                  className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4"
                >
                  <MoodsCard key={id} {...props} link="albumb-allsong" />
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            <div className="row g-4">
              {topSongData.slice(1, 5).map(({ id, ...props }) => (
                <div
                  key={id}
                  className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4"
                >
                  <MoodsCard key={id} {...props} link="albumb-allsong" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-60">
        <a href="workout-allsong.html" className="cmn__simple2">
          Load More
        </a>
      </div>
    </section>
  );
};

export default MusicSection;