import { workoutCardData } from "../../../../public/data/workoutData";
import MoodsCard from "./MoodsCard";

const Workout = () => {
  return (
    // <!--workout section-->
    <section className="workout__section pr-24 pl-24 pb-100">
      <div className="container-fluid p-0">
        <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h2>Workout</h2>
          <a
            href="workout.html"
            className="view__btn white d-flex align-items-center gap-2"
          >
            View All
            <i className="ti ti-arrow-narrow-right"></i>
          </a>
        </div>
        <div className="row g-4">
          {workoutCardData.map(({ id, ...props }) => (
            <div
              key={id}
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-md-4 col-sm-4"
            >
              <MoodsCard key={id} {...props} link="albumb-allsong" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workout;
