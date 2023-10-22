import { podCastData } from "@/../public/data/podCastData";
import SelectBox from "@/components/shared/SelectBox";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import PodcastCard from "./PodcastCard";

const PodcastSection = () => {
  const newItems = [
    {
      label: "Newest Items",
    },
    {
      label: "New Artists",
    },
    {
      label: "Expert Artists",
    },
  ];
  return (
    <section className="trending__section pr-24 pl-24 pb-100">
      <div className="container-flud p-0">
        <h3 className="white mb-30">Podcasts</h3>
      </div>
      <div className="trending__selected mb-30 d-flex align-items-center justify-content-lg-between justify-content-center">
        <div className="select__lefts d-flex align-items-center">
          <form
            action="#0"
            className="d-flex align-items-center justify-content-between"
          >
            <input type="text" placeholder="Search..." />
            <button type="submit" aria-label="submit button">
              <IconSearch />
            </button>
          </form>
          <SelectBox options={newItems} />
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
              aria-label="home-tab"
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
              aria-label="profile-tab"
            >
              Popular
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
          >
            <div className="row g-4">
              {podCastData.slice(0, 8).map(({ id, ...props }) => (
                <div key={id} className="col-lg-3 col-md-6 col-sm-6">
                  <PodcastCard {...props} />
                </div>
              ))}
            </div>
            <div className="text-center mt-40">
              <Link href="podcast-allsong" className="cmn__simple2">
                Load More
              </Link>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="row g-4">
              {podCastData.slice(0, 4).map(({ id, ...props }) => (
                <div key={id} className="col-lg-3 col-md-6 col-sm-6">
                  <PodcastCard {...props} />
                </div>
              ))}
            </div>
            <div className="text-center mt-40">
              <Link href="#0" className="cmn__simple2">
                Load More
              </Link>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="row g-4">
              {podCastData.slice(0, 4).map(({ id, ...props }) => (
                <div key={id} className="col-lg-3 col-md-6 col-sm-6">
                  <PodcastCard {...props} />
                </div>
              ))}
            </div>
            <div className="text-center mt-40">
              <Link href="#0" className="cmn__simple2">
                Load More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
