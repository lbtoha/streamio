import { topSongData } from "@/../public/data/topSongData";
import MoodsCard from "../home/MoodsCard";

const TopSinger = () => {
  return (
    // <!--top singer section-->
    <section className="topsinger__song pb-100 custom__space pr-24 pl-24">
      <div className="container-flud p-0">
        <h3 className="white mb-16">Top Songs</h3>
        <div className="row g-4">
          {topSongData.slice(0, 6).map(({ id, ...props }) => (
            <div
              key={id}
              className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4"
            >
              <MoodsCard {...props} link="album-details" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSinger;
