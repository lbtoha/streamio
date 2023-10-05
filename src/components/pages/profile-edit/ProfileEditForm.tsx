import Link from "next/link";

const ProfileEditForm = () => {
  return (
    <section className="profile__section custom__space mt-40 pr-24 pl-24 pb-80">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="event__createcover">
              <form action="#0" className="cover__form">
                <h3 className="white mb-30 text-center">Edit Profile</h3>
                <div className="row g-4">
                  <h4 className="white mb-0 pb-0">Profile Details</h4>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="user"
                        className="mb-16 fs-18 d-block fw-500 bodyfont"
                      >
                        User Name <span className="base2">*</span>
                      </label>
                      <input type="text" id="user" placeholder="User" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="emails"
                        className="mb-16 fs-18 d-block fw-500 bodyfont"
                      >
                        Email Address <span className="base2">*</span>
                      </label>
                      <input type="email" id="emails" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="names"
                        className="mb-16 fs-18 d-block fw-500 bodyfont"
                      >
                        First Name <span className="base2">*</span>
                      </label>
                      <input type="text" id="names" placeholder="David" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="nameslast"
                        className="mb-16 fs-18 d-block fw-500 bodyfont"
                      >
                        Last Name <span className="base2">*</span>
                      </label>
                      <input type="text" id="nameslast" placeholder="Rolex" />
                    </div>
                  </div>
                  <h4 className="white mb-0 pb-0 mt-60">Profile Details</h4>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="oldpas"
                        className="mb-16 fs-18 d-block fw-500 bodyfont"
                      >
                        Old Password <span className="base2">*</span>
                      </label>
                      <input type="text" id="oldpas" placeholder="****" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="newpas"
                        className="mb-16 fs-18 d-block fw-500 bodyfont"
                      >
                        New Password <span className="base2">*</span>
                      </label>
                      <input type="text" id="newpas" placeholder="****" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="conffpas"
                        className="mb-16 fs-18 d-block fw-500 bodyfont"
                      >
                        Confirm New Password <span className="base2">*</span>
                      </label>
                      <input type="text" id="conffpas" placeholder="****" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cover__grp">
                      <label
                        htmlFor="selectss"
                        className="mb-16 fs-18 d-block fw-500 bodyfont"
                      >
                        Select <span className="base2">*</span>
                      </label>
                      <input type="text" id="selectss" placeholder="Option" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile__editcheck">
                      <div className="pay__check mb-16 d-flex align-items-center gap-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          checked
                        />
                        <label
                          className="form-check-label mt-1 fs-16 fw-400 bodyfont pra"
                          htmlFor="flexCheckDefault"
                        >
                          Share my registration data with Streamio content
                          providers for marketing purposes.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cover__grp profile__cancel d-flex justify-content-end">
                      <Link
                        href="#0"
                        className="fs-16 cancel__btn fw-500 bodyfont d-block pra"
                      >
                        Cancel
                      </Link>
                      <button type="submit" className="cmn--btn">
                        <span>Save profile</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileEditForm;
