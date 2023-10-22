import { genresAllSongsSliderData } from "@/../public/data/genresAllSongsSliderData";
import LoadMore from "@/components/shared/LoadMore";
import ViewAll from "@/components/shared/ViewAll";
import GenresSliderCard from "../genres-allsong/GenresSliderCard";

const GenresSection = () => {
  return (
    <section className="genres__section pr-24 pl-24 pb-100">
      <div className="container-fluid">
        <div className="header__text mb-30 d-flex justify-content-between">
          <h2>Genres</h2> <ViewAll />
        </div>
        <div className="row g-4">
          {genresAllSongsSliderData.map(({ id, ...props }) => (
            <div
              key={id}
              className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-md-4 col-sm-4"
            >
              <GenresSliderCard {...props} link="genres-details" />
            </div>
          ))}
          <LoadMore />
        </div>
      </div>
    </section>
  );
};

export default GenresSection;
