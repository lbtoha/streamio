import { featureShowData } from "@/../public/data/featureShowData";
import { featureShowRightData } from "@/../public/data/featureShowRightData";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import FeatureShowLeftCard from "./FeatureShowLeftCard";
import FeatureShowRightCard from "./FeatureShowRightCard";

const FeaturedShows = () => {
  return (
    // <!--show feature section-->
    <section className="featuredshow__section pr-24 pl-24 mb-100 overflow-hidden">
      <div className="container-fluid p-0">
        <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h2>Featured Shows</h2>
          <Link
            href="freature-show"
            className="view__btn white d-flex align-items-center gap-2"
          >
            View All
            <IconArrowNarrowRight />
          </Link>
        </div>
        <div className="row g-4">
          {featureShowData.slice(0, 2).map(({ id, ...props }) => (
            <FeatureShowLeftCard key={id} {...props} />
          ))}
          <div className="col-xxl-4 col-12">
            <div className="show__rightbox featured__show-right">
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
