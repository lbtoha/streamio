import { exploreSectionData } from "@/../public/data/exploreSectionData";
import { songUpgradeData } from "@/../public/data/songUpgrdeData";
import { weeklytopTrackData } from "@/../public/data/weeklyTopTracksData";
import {
  IconCamera,
  IconEdit,
  IconGenderFemale,
  IconPlaylistOff,
  IconPlus,
  IconShare3,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import SongUpgradeTableRow from "../album-allsong/SongUpgradeTableRow";
import ExploreSectionTableRow from "../explore/ExploreSectionTableRow";
import WeeklyTopTrack from "../explore/WeeklyTopTrack";

const ProfileSection = () => {
  return (
    <section className="profile__section custom__space pr-24 pl-24 pb-80">
      <div className="container">
        <div className="event__createcover profile__cover">
          <div className="event__coverhead profile__coverchange">
            <div className="box">
              <Image
                width={1356}
                height={517}
                className="profile-pic arrow "
                src="/img/profile/profile-cover.jpg"
                alt="img"
              />
              <div className="thingkin">
                <IconCamera className="upload-button d-block white fs-30" />
                <input
                  className="file-upload mt-10"
                  type="file"
                  placeholder="Event Cover"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="story__change2 ralt">
              <div className="thumb">
                <Image
                  width={110}
                  height={110}
                  src="/img/profile/david.jpg"
                  alt="img"
                />
                <div className="boxes">
                  <IconPlus />
                  <input type="file" accept="image/*" />
                </div>
              </div>
              <div className="content">
                <span className="fs-20 fw-500 d-block white bodyfont mb-1">
                  David Malan
                </span>
                <span className="fs-14 fw-500 d-block white mb-3">
                  duhvr847y439
                </span>
                <Link
                  href="#0"
                  className="d-flex fs-14 fw-500 bodyfont base2 align-items-center gap-2"
                >
                  <IconEdit />
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
          <div className="profile__tabsbar mb-60">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pro1-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pro1-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="pro1-tab-pane"
                  aria-selected="true"
                  aria-label="button"
                >
                  Activites
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pro2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pro2-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="pro2-tab-pane"
                  aria-selected="false"
                  aria-label="button"
                >
                  Songs
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pro3-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pro3-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="pro3-tab-pane"
                  aria-selected="false"
                  aria-label="button"
                >
                  Albums
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pro4-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pro4-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="pro4-tab-pane"
                  aria-selected="false"
                  aria-label="button"
                >
                  Playlist
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pro5-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pro5-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="pro5-tab-pane"
                  aria-selected="false"
                  aria-label="tab button"
                >
                  Liked
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pro6-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pro6-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="pro6-tab-pane"
                  aria-selected="false"
                  aria-label="tab button"
                >
                  Events
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pro7-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pro7-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="pro7-tab-pane"
                  aria-selected="false"
                  aria-label="tab button"
                >
                  Stations
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pro8-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pro8-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="pro8-tab-pane"
                  aria-selected="false"
                  aria-label="tab button"
                >
                  Latest Songs
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile__bodys">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pro1-tab-pane"
              role="tabpanel"
              aria-labelledby="pro1-tab"
            >
              <div className="row g-4">
                <div className="col-lg-7">
                  <div className="profile__explore">
                    <div className="latest__songwrap moods__allsong">
                      <table className="table ctablemy align-middle align-center w-100">
                        <tbody>
                          {exploreSectionData.map(({ id, ...props }) => (
                            <ExploreSectionTableRow key={id} {...props} />
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
                <div className="col-lg-5">
                  <div className="follower__box mb-24">
                    <div className="thumb">
                      <Image
                        width={160}
                        height={160}
                        src="/img/profile/followers.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Tracks
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          0
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Followers
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          75
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Following
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          2k
                        </span>
                      </div>
                    </div>
                    <Link
                      href="#0"
                      className="d-flex mb-10 align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconGenderFemale className="fs-24 base" />
                      Male
                    </Link>
                    <Link
                      href="#0"
                      className="d-flex align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconShare3 className="fs-24 base" />
                      Social Links
                    </Link>
                  </div>
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
            <div
              className="tab-pane fade"
              id="pro2-tab-pane"
              role="tabpanel"
              aria-labelledby="pro2-tab"
            >
              <div className="row g-4">
                <div className="col-lg-7">
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
                    <div className="text-center mt-40">
                      <Link href="#0" className="cmn__simple2">
                        Load More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="follower__box mb-24">
                    <div className="thumb">
                      <Image
                        width={160}
                        height={160}
                        src="/img/profile/followers.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Tracks
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          0
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Followers
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          75
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Following
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          2k
                        </span>
                      </div>
                    </div>
                    <Link
                      href="#0"
                      className="d-flex mb-10 align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconGenderFemale className="fs-24 base" />
                      Male
                    </Link>
                    <Link
                      href="#0"
                      className="d-flex align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconShare3 className="fs-24 base" />
                      Social Links
                    </Link>
                  </div>
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
            <div
              className="tab-pane fade"
              id="pro3-tab-pane"
              role="tabpanel"
              aria-labelledby="pro3-tab"
            >
              <div className="row g-4">
                <div className="col-lg-7">
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
                    <div className="text-center mt-40">
                      <Link href="#0" className="cmn__simple2">
                        Load More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="follower__box mb-24">
                    <div className="thumb">
                      <Image
                        width={160}
                        height={160}
                        src="/img/profile/followers.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Tracks
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          0
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Followers
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          75
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Following
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          2k
                        </span>
                      </div>
                    </div>
                    <Link
                      href="#0"
                      className="d-flex mb-10 align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconGenderFemale className="fs-24 base" />
                      Male
                    </Link>
                    <Link
                      href="#0"
                      className="d-flex align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconShare3 className="fs-24 base" />
                      Social Links
                    </Link>
                  </div>
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
            <div
              className="tab-pane fade"
              id="pro4-tab-pane"
              role="tabpanel"
              aria-labelledby="pro4-tab"
            >
              <div className="row g-4">
                <div className="col-lg-7">
                  <div className="no__tracksfound">
                    <Link href="#0" className="boxes text-center">
                      <IconPlaylistOff />
                      <span className="fs-16 fw-500 white d-block">
                        No tracks found
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="follower__box mb-24">
                    <div className="thumb">
                      <Image
                        width={160}
                        height={160}
                        src="/img/profile/followers.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Tracks
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          0
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Followers
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          75
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Following
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          2k
                        </span>
                      </div>
                    </div>
                    <Link
                      href="#0"
                      className="d-flex mb-10 align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconGenderFemale className="fs-24 base" />
                      Male
                    </Link>
                    <Link
                      href="#0"
                      className="d-flex align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconShare3 className="fs-24 base" />
                      Social Links
                    </Link>
                  </div>
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
            <div
              className="tab-pane fade"
              id="pro5-tab-pane"
              role="tabpanel"
              aria-labelledby="pro5-tab"
            >
              <div className="row g-4">
                <div className="col-lg-7">
                  <div className="no__tracksfound">
                    <Link href="#0" className="boxes text-center">
                      <IconPlaylistOff />
                      <span className="fs-16 fw-500 white d-block">
                        No tracks found
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="follower__box mb-24">
                    <div className="thumb">
                      <Image
                        width={160}
                        height={160}
                        src="/img/profile/followers.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Tracks
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          0
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Followers
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          75
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Following
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          2k
                        </span>
                      </div>
                    </div>
                    <Link
                      href="#0"
                      className="d-flex mb-10 align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconGenderFemale className="fs-24 base" />
                      Male
                    </Link>
                    <Link
                      href="#0"
                      className="d-flex align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconShare3 className="fs-24 base" />
                      Social Links
                    </Link>
                  </div>
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
            <div
              className="tab-pane fade"
              id="pro6-tab-pane"
              role="tabpanel"
              aria-labelledby="pro6-tab"
            >
              <div className="row g-4">
                <div className="col-lg-7">
                  <div className="no__tracksfound">
                    <Link href="#0" className="boxes text-center">
                      <IconPlaylistOff />
                      <span className="fs-16 fw-500 white d-block">
                        No tracks found
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="follower__box mb-24">
                    <div className="thumb">
                      <Image
                        width={160}
                        height={160}
                        src="/img/profile/followers.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Tracks
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          0
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Followers
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          75
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Following
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          2k
                        </span>
                      </div>
                    </div>
                    <Link
                      href="#0"
                      className="d-flex mb-10 align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconGenderFemale className="fs-24 base" />
                      Male
                    </Link>
                    <Link
                      href="#0"
                      className="d-flex align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconShare3 className="fs-24 base" />
                      Social Links
                    </Link>
                  </div>
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
            <div
              className="tab-pane fade"
              id="pro7-tab-pane"
              role="tabpanel"
              aria-labelledby="pro7-tab"
            >
              <div className="row g-4">
                <div className="col-lg-7">
                  <div className="no__tracksfound">
                    <Link href="#0" className="boxes text-center">
                      <IconPlaylistOff />
                      <span className="fs-16 fw-500 white d-block">
                        No tracks found
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="follower__box mb-24">
                    <div className="thumb">
                      <Image
                        width={160}
                        height={160}
                        src="/img/profile/followers.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Tracks
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          0
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Followers
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          75
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Following
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          2k
                        </span>
                      </div>
                    </div>
                    <Link
                      href="#0"
                      className="d-flex mb-10 align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconGenderFemale className="fs-24 base" />
                      Male
                    </Link>
                    <Link
                      href="#0"
                      className="d-flex align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconShare3 className="fs-24 base" />
                      Social Links
                    </Link>
                  </div>
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
            <div
              className="tab-pane fade"
              id="pro8-tab-pane"
              role="tabpanel"
              aria-labelledby="pro8-tab"
            >
              <div className="row g-4">
                <div className="col-lg-7">
                  <div className="no__tracksfound">
                    <Link href="#0" className="boxes text-center">
                      <IconPlaylistOff />
                      <span className="fs-16 fw-500 white d-block">
                        No tracks found
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="follower__box mb-24">
                    <div className="thumb">
                      <Image
                        width={160}
                        height={160}
                        src="/img/profile/followers.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Tracks
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          0
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Followers
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          75
                        </span>
                      </div>
                      <div className="follow__item">
                        <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                          Following
                        </span>
                        <span className="d-block bodyfont white fw-600 fs-24">
                          2k
                        </span>
                      </div>
                    </div>
                    <Link
                      href="#0"
                      className="d-flex mb-10 align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconGenderFemale className="fs-24 base" />
                      Male
                    </Link>
                    <Link
                      href="#0"
                      className="d-flex align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                    >
                      <IconShare3 className="fs-24 base" />
                      Social Links
                    </Link>
                  </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
