import { featureShowData } from "../../../../public/data/featureShowData";
import { featureShowRightData } from "../../../../public/data/featureShowRightData";
import FeatureShowLeftCard from "./FeatureShowLeftCard";
import FeatureShowRightCard from "./FeatureShowRightCard";

const FeaturedShows = () => {
  return (
    // <!--show feature section-->
    <section className="featuredshow__section pr-24 pl-24 pb-100">
      <div className="container-fluid p-0">
        <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h2>Featured Shows</h2>
          <a
            href="freature-show.html"
            className="view__btn white d-flex align-items-center gap-2"
          >
            View All
            <i className="ti ti-arrow-narrow-right"></i>
          </a>
        </div>
        <div className="row g-4">
          {featureShowData.map(({ id, ...props }) => (
            <FeatureShowLeftCard key={id} {...props} />
          ))}
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="show__rightbox">
              {featureShowRightData.map(({ id, ...props }) => (
                <FeatureShowRightCard key={id} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShows;
