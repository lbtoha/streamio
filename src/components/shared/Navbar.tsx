"use client";
import { navbarContext } from "@/utils/reactContext";
import { IconSmartHome } from "@tabler/icons-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const { isSidebarOpen } = useContext(navbarContext);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        document
          .querySelector(".header-wrapper")
          ?.classList.remove("slideInUp");
        document.body.classList.add("body-padding");
      } else {
        document.querySelector(".header-wrapper")?.classList.add("slideInUp");
        document.body.classList.remove("body-padding");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);
  return (
    // <!-- Header Here -->
    <>
      <div className="header__section__attachment">
        <div className="container-fluid p-0-fluid p-0">
          <div className=" d-flex">
            <div
              className={`sidebar-wrapper mainbg ${isSidebarOpen && "active"}`}
            >
              <div className="d-flex logo__wrap align-items-center justify-content-between">
                <a href="index.html" className="logo">
                  <Image
                    width={180}
                    height={52}
                    src="/img/logo/logo.png"
                    alt="img"
                  />
                </a>
                <div className="closebtn d-none">
                  <i className="material-symbols-outlined">close</i>
                </div>
              </div>
              <div className="sidebar__wrapbox">
                <ul className="sidebar__menu">
                  <li className="liclick">
                    <span className="d-flex align-items-center">
                      <a
                        onClick={() => setIsMenuClicked(!isMenuClicked)}
                        href="javascript:void(0)"
                        className={`mclick d-flex hcolor align-items-center w-100 justify-content-between ${
                          isMenuClicked && "reply-active"
                        }`}
                      >
                        <span className="d-flex click__title fs-16 bodyfont d-flex align-items-center gap-2">
                          <IconSmartHome className="ti ti-smart-home"></IconSmartHome>
                          Home
                        </span>
                        <span className="d-flex click__title align-items-center">
                          {/* <i className="ti ti-IconX IconX"></i> */}
                          <i className="ti ti-plus plus"></i>
                          <i className="ti ti-minus minus"></i>
                        </span>
                      </a>
                    </span>
                    <div
                      className={` menucontent menucontent-show ${
                        isMenuClicked ? "active" : ""
                      }`}
                    >
                      <ul>
                        <li>
                          <a href="index.html">Home One</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Two</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="explore.html"
                      className="d-flex hcolor align-items-center gap-2"
                    >
                      <i className="ti ti-world"></i>
                      Explore
                    </a>
                  </li>
                  <li>
                    <a
                      href="music.html"
                      className="d-flex hcolor align-items-center gap-2"
                    >
                      <i className="ti ti-music"></i>
                      Music
                    </a>
                  </li>
                  <li>
                    <a
                      href="albums.html"
                      className="d-flex hcolor align-items-center gap-2"
                    >
                      <i className="ti ti-album"></i>
                      Albums
                    </a>
                  </li>
                  <li>
                    <a
                      href="poodcasts.html"
                      className="d-flex hcolor align-items-center gap-2"
                    >
                      <i className="ti ti-headset"></i>
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <a
                      href="event.html"
                      className="d-flex hcolor align-items-center gap-2"
                    >
                      <i className="ti ti-calendar-event"></i>
                      Event
                    </a>
                  </li>
                  <li className="liclick d-xl-none">
                    <span className="d-flex align-items-center">
                      <a
                        href="javascript:void(0)"
                        className="mclick d-flex hcolor align-items-center w-100 justify-content-between"
                      >
                        <span className="d-flex click__title fs-16 bodyfont d-flex align-items-center gap-2">
                          <i className="ti ti-clipboard-text"></i>
                          Recent
                        </span>
                        <span className="d-flex click__title align-items-center">
                          <i className="ti ti-plus plus"></i>
                          <i className="ti ti-minus minus"></i>
                        </span>
                      </a>
                    </span>
                    <div className="menucontent">
                      <ul>
                        <li>
                          <a href="genres.html">Genres</a>
                        </li>
                        <li>
                          <a href="moods.html">Moods</a>
                        </li>
                        <li>
                          <a href="trending.html">Trending</a>
                        </li>
                        <li>
                          <a href="artists.html">Popular</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="liclick d-xl-none">
                    <span className="d-flex align-items-center">
                      <a
                        href="javascript:void(0)"
                        className="mclick d-flex hcolor align-items-center w-100 justify-content-between"
                      >
                        <span className="d-flex click__title fs-16 bodyfont d-flex align-items-center gap-2">
                          <i className="ti ti-clipboard-text"></i>
                          Others
                        </span>
                        <span className="d-flex click__title align-items-center">
                          <i className="ti ti-plus plus"></i>
                          <i className="ti ti-minus minus"></i>
                        </span>
                      </a>
                    </span>
                    <div className="menucontent">
                      <ul>
                        <li>
                          <a href="signin.html">Sing In</a>
                        </li>
                        <li>
                          <a href="signup.html">Sign Up</a>
                        </li>
                        <li>
                          <a href="reset-password.html">Reset Password</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="privacy.html">Privacy policy</a>
                        </li>
                        <li>
                          <a href="error.html">404 Page</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="liclick">
                    <span className="d-flex align-items-center">
                      <a
                        href="javascript:void(0)"
                        className="mclick d-flex hcolor align-items-center w-100 justify-content-between"
                      >
                        <span className="d-flex click__title fs-16 bodyfont d-flex align-items-center gap-2">
                          <i className="ti ti-clipboard-text"></i>
                          Pages
                        </span>
                        <span className="d-flex click__title align-items-center">
                          <i className="ti ti-plus plus"></i>
                          <i className="ti ti-minus minus"></i>
                        </span>
                      </a>
                    </span>
                    <div className="menucontent">
                      <ul>
                        <li>
                          <a href="blog.html">Blog Page</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="freature-show.html">Show Page</a>
                        </li>
                        <li>
                          <a href="show-details.html">Show Details</a>
                        </li>
                        <li>
                          <a href="product.html">Product Page</a>
                        </li>
                        <li>
                          <a href="product-details.html">Product Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart Page</a>
                        </li>
                        <li>
                          <a href="checkout.html">Check out</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing Plan</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`header-wrapper mainbg menu-fixed ${
                isSidebarOpen && "body-collapse"
              }`}
            >
              <ul className="main-menuone">
                <li className="small__logo">
                  <a href="index.html">
                    <Image
                      width={68}
                      height={51}
                      src="/img/logo/favicon-small.png"
                      alt="img"
                    />
                  </a>
                </li>
                <li className="search__show">
                  <form action="#0" className="d-flex align-items-center">
                    <button type="submit">
                      <i className="ti ti-search"></i>
                    </button>
                    <input
                      type="text"
                      placeholder="Search songs, podcasts, albums..."
                    />
                  </form>
                </li>
                <li>
                  <a href="genres.html">Genres</a>
                </li>
                <li>
                  <a href="moods.html">Moods</a>
                </li>
                <li>
                  <a href="trending.html">Trending</a>
                </li>
                <li>
                  <a href="artists.html">Popular</a>
                </li>
                <li className="liclick xl__devicecustomize max-xl-none">
                  <span className="d-flex align-items-center">
                    <a
                      href="javascript:void(0)"
                      className="mclick d-flex hcolor align-items-center w-100 justify-content-between"
                    >
                      <i className="ti ti-dots"></i>
                    </a>
                  </span>
                  <div className="menucontent">
                    <ul>
                      <li>
                        <a href="signin.html">Sing In</a>
                      </li>
                      <li>
                        <a href="signup.html">Sign Up</a>
                      </li>
                      <li>
                        <a href="reset-password.html">Reset Password</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="privacy.html">Privacy policy</a>
                      </li>
                      <li>
                        <a href="error.html">404 Page</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="menu__right__components d-flex align-items-center">
                <div className="menu__components d-flex align-items-center">
                  <a href="cart.html" className="shop__tolley">
                    <i className="ti ti-shopping-cart pra fs-30"></i>
                    <span className="shop__badge">3</span>
                  </a>
                  <div className="dropdown profie__dropdown">
                    <a
                      href="#0"
                      className="link user__active d-flex align-items-center"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,16"
                      aria-expanded="true"
                    >
                      <Image
                        width={38}
                        height={39}
                        src="/img/bn/profile.jpg"
                        alt="image"
                        className="img-fluid profile__img rounded-circle objec-fit-cover"
                      />
                      <span className="d-flex fs-14 fw-500 pra align-items-center gap-1">
                        David Malan
                        <i className="ti ti-chevron-down"></i>
                      </span>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      data-popper-placement="bottom-end"
                    >
                      <div className="p-6">
                        <div className="d-flex align-items-center mb-24 gap-3 max-width">
                          <div className="jerny__uer ralt">
                            <Image
                              width={200}
                              height={200}
                              src="/img/mood/mood1.jpg"
                              alt="image"
                              className="img-fluid jenny rounded-circle object-fit-cover flex-shrink-0"
                            />
                            <i className="ti ti-checks checks"></i>
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="fs-20 fw-600 white  mb-0">
                              David95
                            </h5>
                            <span className="d-block fw-400 pra fs-16">
                              Info95@mail.com
                            </span>
                          </div>
                        </div>
                        <ul className="list">
                          <li className="mb-16">
                            <a
                              href="profile.html"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-bell fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Profile{" "}
                              </span>
                            </a>
                          </li>
                          <li className="mb-16">
                            <a
                              href="javascript:void(0)"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-bell fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Theme{" "}
                              </span>
                            </a>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="mb-16">
                            <a
                              href="javascript:void(0)"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-credit-card-2-back fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Help{" "}
                              </span>
                            </a>
                          </li>
                          <li className="mb-16">
                            <a
                              href="javascript:void(0)"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-credit-card-2-back fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Send Feedback{" "}
                              </span>
                            </a>
                          </li>
                          <li className="mb-16">
                            <a
                              href="javascript:void(0)"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-gear fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Settings{" "}
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-file-earmark-plus fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Log Out{" "}
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown notification__dropdown">
                    <a
                      href="#"
                      className="link glose__icon"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,14"
                      aria-expanded="true"
                    >
                      <i className="ti ti-bell"></i>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end "
                      data-popper-placement="bottom-end"
                    >
                      <ul className="list">
                        <li className="mb-16">
                          <a href="#0" className="link d-flex dropdown-item">
                            <Image
                              width={200}
                              height={200}
                              src="/img/mood/mood2.jpg"
                              className="notification__thumb"
                              alt="img"
                            />
                            <span className="notify__content">
                              <span className="fs-16 d-block fw-600 white ">
                                David95
                              </span>
                              <span className="fs-14 message d-block fw-500 pra ">
                                Message alert!
                              </span>
                              <span className="fs-10 fw-400 pra ">
                                10 Min ago
                              </span>
                            </span>
                          </a>
                        </li>
                        <li className="mb-16">
                          <a href="#0" className="link d-flex dropdown-item">
                            <Image
                              width={200}
                              height={200}
                              src="/img/mood/mood4.jpg"
                              className="notification__thumb"
                              alt="img"
                            />
                            <span className="notify__content">
                              <span className="fs-16 d-block fw-600 white ">
                                Mlan MCcoy
                              </span>
                              <span className="fs-14 message d-block fw-500 pra ">
                                Message alert!
                              </span>
                              <span className="fs-10 fw-400 pra ">
                                1 days ago
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#0" className="link d-flex dropdown-item">
                            <Image
                              width={200}
                              height={200}
                              src="/img/mood/mood5.jpg"
                              className="notification__thumb"
                              alt="img"
                            />
                            <span className="notify__content">
                              <span className="fs-16 d-block fw-600 white ">
                                Neymer Jr
                              </span>
                              <span className="fs-14 message d-block fw-500 pra ">
                                Message alert!
                              </span>
                              <span className="fs-10 fw-400 pra ">
                                2 Month ago
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
