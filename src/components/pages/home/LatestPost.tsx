import { latestPostData } from "../../../../public/data/latestPostData";
import LatestPostCard from "./LatestPostCard";

const LatestPost = () => {
  return (
    // <!--latest section-->
    <section className="latest__section pr-24 pl-24 pb-100">
      <div className="container-fluid p-0">
        <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h2>Latest Posts</h2>
          <a
            href="blog.html"
            className="view__btn white d-flex align-items-center gap-2"
          >
            View All
            <i className="ti ti-arrow-narrow-right"></i>
          </a>
        </div>
        <div className="row g-4">
          {latestPostData.map(({ id, ...props }) => (
            <LatestPostCard key={id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPost;