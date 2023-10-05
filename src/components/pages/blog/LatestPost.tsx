import Link from "next/link";
import { latestPostData } from "../../../../public/data/latestPostData";
import LatestPostCard from "../home/LatestPostCard";

const LatestPost = () => {
  return (
    // <!--genres section-->
    <section className="mr-24 ml-24 pb-100">
      <div className="trending__selected mb-30 d-flex align-items-center">
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
              All
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
              Music
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
              Review
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tabjozz"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-panejozz"
              type="button"
              role="tab"
              aria-controls="contact-tab-panejozz"
              aria-selected="false"
            >
              Interview
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
            tabindex="0"
          >
            <div className="row g-4">
              {latestPostData.map(({ id, ...props }) => (
                <LatestPostCard key={id} {...props} />
              ))}
            </div>
            <div className="text-center mt-40">
              <Link href="#0" className="cmn__simple2">
                Load More
              </Link>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <div className="row g-4">
              {latestPostData.slice(0, 3).map(({ id, ...props }) => (
                <LatestPostCard key={id} {...props} />
              ))}
            </div>
            <div className="text-center mt-40">
              <Link href="#0" className="cmn__simple2">
                Load More
              </Link>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            <div className="row g-4">
              {latestPostData.map(({ id, ...props }) => (
                <LatestPostCard key={id} {...props} />
              ))}
            </div>
            <div className="text-center mt-40">
              <Link href="blog-details" className="cmn__simple2">
                Load More
              </Link>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-panejozz"
            role="tabpanel"
            aria-labelledby="contact-tabjozz"
            tabindex="0"
          >
            <div className="row g-4">
              {latestPostData.map(({ id, ...props }) => (
                <LatestPostCard key={id} {...props} />
              ))}
            </div>
            <div className="text-center mt-40">
              <Link href="#0" className="cmn__simple2">
                Load More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
