import { songUpgradeData } from "../../../../public/data/songUpgrdeData";
import SongUpgradeTableRow from "./SongUpgradeTableRow";

const SongUpgrade = () => {
  return (
    // <!--song upgrade section-->
    <section className="latest__upgrade pb-100 pr-24 pl-24">
      <div className="container-flud p-0">
        <h3 className="white mb-16">Mix All Songs</h3>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="latest__songwrap moods__allsong">
              <table className="table align-middle align-center w-100">
                <tbody>
                  {songUpgradeData
                    .slice(0, 5)
                    .map(({ id, ...props }, index) => (
                      <SongUpgradeTableRow
                        key={id}
                        {...props}
                        index={index + 1}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="latest__songwrap moods__allsong">
              <table className="table align-middle align-center w-100">
                <tbody>
                  {songUpgradeData
                    .slice(5, 10)
                    .map(({ id, ...props }, index) => (
                      <SongUpgradeTableRow
                        key={id}
                        {...props}
                        index={index + 6}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="text-center mt-40">
          <a href="#0" className="cmn__simple2">
            Load More
          </a>
        </div>
      </div>
    </section>
  );
};

export default SongUpgrade;
