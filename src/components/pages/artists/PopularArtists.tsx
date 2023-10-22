import { artistCardData } from "@/../public/data/artistsCardData";
import LoadMore from "@/components/shared/LoadMore";
import SelectBox from "@/components/shared/SelectBox";
import { IconSearch } from "@tabler/icons-react";
import ArtistsSliderCard from "../home/ArtistsSliderCard";

const PopularArtists = () => {
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
    // <!--genres section-->
    <section className="trending__section pr-24 pl-24 pb-100">
      <div className="trending__selected mb-30 d-flex align-items-center justify-content-center justify-content-lg-between">
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
              aria-label="home-tab"
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
              {artistCardData.slice(0, 8).map(({ id, ...props }) => (
                <div
                  key={id}
                  className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6"
                >
                  <ArtistsSliderCard {...props} />
                </div>
              ))}
              <LoadMore />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="row g-4">
              {artistCardData.slice(0, 4).map(({ id, ...props }) => (
                <div
                  key={id}
                  className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6"
                >
                  <ArtistsSliderCard {...props} />
                </div>
              ))}
              <LoadMore />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="row g-4">
              {artistCardData.slice(0, 4).map(({ id, ...props }) => (
                <div
                  key={id}
                  className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6"
                >
                  <ArtistsSliderCard {...props} />
                </div>
              ))}
              <LoadMore />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularArtists;
