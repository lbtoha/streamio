import { podCastData } from "../../../../public/data/podCastData";
import PodcastCard from "./PodcastCard";

const PodcastSection = () => {
  return (
    <section className="trending__section pr-24 pl-24 pb-100">
      <div className="container-flud p-0">
        <h3 className="white mb-30">Podcasts</h3>
      </div>
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
            <option value="1">Newest Items</option>
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
              Live
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
              {podCastData.slice(0, 8).map(({ id, ...props }) => (
                <div key={id} className="col-lg-3 col-md-6 col-sm-6">
                  <PodcastCard {...props} />
                </div>
              ))}
            </div>
            <div className="text-center mt-40">
              <a href="podcast-allsong.html" className="cmn__simple2">
                Load More
              </a>
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
              {podCastData.slice(0, 4).map(({ id, ...props }) => (
                <div key={id} className="col-lg-3 col-md-6 col-sm-6">
                  <PodcastCard {...props} />
                </div>
              ))}
            </div>
            <div className="text-center mt-40">
              <a href="#0" className="cmn__simple2">
                Load More
              </a>
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
              {podCastData.slice(0, 4).map(({ id, ...props }) => (
                <div key={id} className="col-lg-3 col-md-6 col-sm-6">
                  <PodcastCard {...props} />
                </div>
              ))}
            </div>
            <div className="text-center mt-40">
              <a href="#0" className="cmn__simple2">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;