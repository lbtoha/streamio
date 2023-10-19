import { featureShowData } from "@/../public/data/featureShowData";
import Link from "next/link";
import FeatureShowLeftCard from "../home/FeatureShowLeftCard";

const FeatureShowSection = () => {
  return (
    <section className="genres__section pr-24 pl-24 pb-100">
      <div className="container-fluid">
        <div className="header__text mb-30">
          <h2>Featured Show</h2>
        </div>
        <div className="row g-4">
          {featureShowData.map(({ id, ...props }) => (
            <FeatureShowLeftCard key={id} {...props} />
          ))}
        </div>
        <div className="text-center mt-40">
          <Link href="#0" className="cmn__simple2">
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowSection;
