"use client";

import { moodsCardData } from "@/../public/data/moodsCardData";
import LoadMore from "@/components/shared/LoadMore";
import ViewAll from "@/components/shared/ViewAll";
import MoodsCard from "../home/MoodsCard";

//@ts-ignore

const MoodsSection = () => {
  return (
    <section className="genres__section pr-24 pl-24 pb-60">
      <div className="container-fluid">
        <div className="header__text mb-30 d-flex justify-content-between">
          <h2>Moods</h2> <ViewAll />
        </div>
        <div className="row g-4">
          {moodsCardData.map(({ id, ...props }) => (
            <div
              key={id}
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4"
            >
              <MoodsCard key={id} {...props} link="mood-details" />
            </div>
          ))}
          <LoadMore />
        </div>
      </div>
    </section>
  );
};

export default MoodsSection;
