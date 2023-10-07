import { trendingsliderData } from "@/../public/data/trendingSliderData";
import SelectBox from "@/components/shared/SelectBox";
import { IconSearch } from "@tabler/icons-react";
import TrendingCard from "./TrendingCard";

const TrendingSection = () => {
  const artists = [
    { label: "Tom Cook" },
    { label: "Tanya Fox" },
    { label: "Hellen Schmidt" },
  ];

  const genres = [
    { label: "All Artists" },
    { label: "New Artists" },
    { label: "Expert Artists" },
  ];

  return (
    <section className="trending__section pr-24 pl-24 pb-100">
      <div className="trending__selected mb-30 d-flex align-items-center justify-content-between">
        <div className="select__lefts d-flex align-items-center">
          <form
            action="#0"
            className="d-flex align-items-center justify-content-between"
          >
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <IconSearch />
            </button>
          </form>
          <SelectBox options={artists} />
          <SelectBox options={genres} />
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
          >
            <div className="row g-4">
              {trendingsliderData.slice(0, 8).map(({ id, ...props }) => (
                <TrendingCard key={id} {...props} />
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="row g-4">
              {trendingsliderData.slice(3).map(({ id, ...props }) => (
                <TrendingCard key={id} {...props} />
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="row g-4">
              {trendingsliderData.slice(4, 8).map(({ id, ...props }) => (
                <TrendingCard key={id} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
