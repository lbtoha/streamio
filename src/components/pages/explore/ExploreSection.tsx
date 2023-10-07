import { exploreSectionData } from "@/../public/data/exploreSectionData";
import { weeklytopTrackData } from "@/../public/data/weeklyTopTracksData";
import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import ExploreSectionTableRow from "./ExploreSectionTableRow";
import WeeklyTopTrack from "./WeeklyTopTrack";

const ExploreSection = () => {
  return (
    <section className="explore__section custom__space pb-60 pr-24 pl-24">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="explore__leftwrap">
              <div className="story__change mb-60 ralt">
                <Image
                  width={252}
                  height={251}
                  className="profile-pic"
                  src="/img/details/explore.png"
                  alt="img"
                />
                <div className="p-image">
                  <span className="white fs-16 d-block fw-600 bodyfont mb-2">
                    Create Story
                  </span>
                  <div className="bbgadd">
                    <div className="boxes">
                      <IconPlus className="upload-button" />
                      <input
                        className="file-upload"
                        type="file"
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest__songwrap moods__allsong">
                <table className="table ctablemy align-middle align-center w-100">
                  <tbody>
                    {exploreSectionData.map(({ id, ...props }) => (
                      <ExploreSectionTableRow key={id} {...props} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="weekly__tracks">
              <h3 className="mb-24 white">Weekly Top Tracks</h3>
              <ul className="weeklytop__tracks">
                {weeklytopTrackData.map(({ id, ...props }) => (
                  <WeeklyTopTrack key={id} {...props} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
