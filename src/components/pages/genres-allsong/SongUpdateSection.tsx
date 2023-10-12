import { songUpgradeData } from "@/../public/data/songUpgrdeData";
import { IconClockHour3 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import SongUpgradeTableRow from "../album-allsong/SongUpgradeTableRow";

const SongUpdateSection = () => {
  return (
    <section className="latest__upgrade pr-24 pl-24 pb-100">
      <div className="container-flud p-0">
        <div className="row g-4">
          <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-7 col-sm-8">
            <div className="latest__songsidebar">
              <h3 className="white mb-30">Latest Songs In Upgrade</h3>
              <div className="latest__thumbside">
                <Image
                  width={390}
                  height={390}
                  src="/img/trending/latest-song.jpg"
                  className="w-100 h-auto flex-shrink-0"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-9">
            <div className="latest__songwrap">
              <table className="table align-middle align-center w-100">
                <thead>
                  <tr>
                    <th>
                      <span className="fs-16 white fw-500 bodyfont">
                        # Title
                      </span>
                    </th>
                    <th className="d__custom">
                      <span className="fs-16 white fw-500 bodyfont">Album</span>
                    </th>
                    <th className="d__custom">
                      <span className="fs-16 white fw-500 bodyfont">
                        Date added
                      </span>
                    </th>
                    <th className="justify-content-end d__custom d-flex">
                      <span className="fs-16 white fw-500 bodyfont">
                        <IconClockHour3 className="fs-22 pra" />
                      </span>
                    </th>
                    <th className="d-lg-none white">
                      <span className="white d-flex align-center justify-content-end">
                        Play
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {songUpgradeData.map(({ id, ...props }, index) => (
                    <SongUpgradeTableRow
                      key={id}
                      {...props}
                      index={index + 1}
                    />
                  ))}
                </tbody>
              </table>
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

export default SongUpdateSection;
