import { workoutCardData } from "@/../public/data/workoutData";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import MoodsCard from "./MoodsCard";

const Workout = ({ start, end }: { start?: number; end?: number }) => {
  return (
    // <!--workout section-->
    <section className="workout__section pr-24 pl-24 pb-100">
      <div className="container-fluid p-0">
        <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h2>Workout</h2>
          <Link
            href="workout"
            className="view__btn white d-flex align-items-center gap-2"
          >
            View All
            <IconArrowNarrowRight />
          </Link>
        </div>
        <div className="row g-4">
          {workoutCardData.slice(start, end).map(({ id, ...props }) => (
            <div
              key={id}
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4"
            >
              <MoodsCard key={id} {...props} link="album-allsong" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workout;
