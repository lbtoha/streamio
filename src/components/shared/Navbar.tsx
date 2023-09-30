"use client";
import { navbarContext } from "@/utils/reactContext";
import { IconSmartHome } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
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
                <Link href="index.html" className="logo">
                  <Image
                    width={180}
                    height={52}
                    src="/img/logo/logo.png"
                    alt="img"
                  />
                </Link>
                <div className="closebtn d-none">
                  <i className="material-symbols-outlined">close</i>
                </div>
              </div>
              <div className="sidebar__wrapbox">
                <ul className="sidebar__menu">
                  <li className="liclick">
                    <span className="d-flex align-items-center">
                      <Link
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
                      </Link>
                    </span>
                    <div
                      className={` menucontent menucontent-show ${
                        isMenuClicked ? "active" : ""
                      }`}
                    >
                      <ul>
                        <li>
                          <Link href="index.html">Home One</Link>
                        </li>
                        <li>
                          <Link href="index-2.html">Home Two</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="explore.html"
                      className="d-flex hcolor align-items-center gap-2"
                    >
                      <i className="ti ti-world"></i>
                      Explore
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="music.html"
                      className="d-flex hcolor align-items-center gap-2"
                    >
                      <i className="ti ti-music"></i>
                      Music
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="albums"
                      className="d-flex hcolor align-items-center gap-2"
                    >
                      <i className="ti ti-album"></i>
                      Albums
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="poodcasts.html"
                      className="d-flex hcolor align-items-center gap-2"
                    >
                      <i className="ti ti-headset"></i>
                      Podcasts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="event.html"
                      className="d-flex hcolor align-items-center gap-2"
                    >
                      <i className="ti ti-calendar-event"></i>
                      Event
                    </Link>
                  </li>
                  <li className="liclick d-xl-none">
                    <span className="d-flex align-items-center">
                      <Link
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
                      </Link>
                    </span>
                    <div className="menucontent">
                      <ul>
                        <li>
                          <Link href="genres.html">Genres</Link>
                        </li>
                        <li>
                          <Link href="moods.html">Moods</Link>
                        </li>
                        <li>
                          <Link href="trending.html">Trending</Link>
                        </li>
                        <li>
                          <Link href="artists.html">Popular</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="liclick d-xl-none">
                    <span className="d-flex align-items-center">
                      <Link
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
                      </Link>
                    </span>
                    <div className="menucontent">
                      <ul>
                        <li>
                          <Link href="signin.html">Sing In</Link>
                        </li>
                        <li>
                          <Link href="signup.html">Sign Up</Link>
                        </li>
                        <li>
                          <Link href="reset-password.html">Reset Password</Link>
                        </li>
                        <li>
                          <Link href="faq.html">Faq</Link>
                        </li>
                        <li>
                          <Link href="contact.html">Contact</Link>
                        </li>
                        <li>
                          <Link href="privacy.html">Privacy policy</Link>
                        </li>
                        <li>
                          <Link href="error.html">404 Page</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="liclick">
                    <span className="d-flex align-items-center">
                      <Link
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
                      </Link>
                    </span>
                    <div className="menucontent">
                      <ul>
                        <li>
                          <Link href="blog.html">Blog Page</Link>
                        </li>
                        <li>
                          <Link href="blog-details.html">Blog Details</Link>
                        </li>
                        <li>
                          <Link href="freature-show.html">Show Page</Link>
                        </li>
                        <li>
                          <Link href="show-details.html">Show Details</Link>
                        </li>
                        <li>
                          <Link href="product.html">Product Page</Link>
                        </li>
                        <li>
                          <Link href="product-details.html">
                            Product Details
                          </Link>
                        </li>
                        <li>
                          <Link href="cart.html">Cart Page</Link>
                        </li>
                        <li>
                          <Link href="checkout.html">Check out</Link>
                        </li>
                        <li>
                          <Link href="pricing.html">Pricing Plan</Link>
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
                  <Link href="index.html">
                    <Image
                      width={68}
                      height={51}
                      src="/img/logo/favicon-small.png"
                      alt="img"
                    />
                  </Link>
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
                  <Link href="genres.html">Genres</Link>
                </li>
                <li>
                  <Link href="moods.html">Moods</Link>
                </li>
                <li>
                  <Link href="trending.html">Trending</Link>
                </li>
                <li>
                  <Link href="artists.html">Popular</Link>
                </li>
                <li className="liclick xl__devicecustomize max-xl-none">
                  <span className="d-flex align-items-center">
                    <Link
                      href="javascript:void(0)"
                      className="mclick d-flex hcolor align-items-center w-100 justify-content-between"
                    >
                      <i className="ti ti-dots"></i>
                    </Link>
                  </span>
                  <div className="menucontent">
                    <ul>
                      <li>
                        <Link href="signin.html">Sing In</Link>
                      </li>
                      <li>
                        <Link href="signup.html">Sign Up</Link>
                      </li>
                      <li>
                        <Link href="reset-password.html">Reset Password</Link>
                      </li>
                      <li>
                        <Link href="faq.html">Faq</Link>
                      </li>
                      <li>
                        <Link href="contact.html">Contact</Link>
                      </li>
                      <li>
                        <Link href="privacy.html">Privacy policy</Link>
                      </li>
                      <li>
                        <Link href="error.html">404 Page</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="menu__right__components d-flex align-items-center">
                <div className="menu__components d-flex align-items-center">
                  <Link href="cart.html" className="shop__tolley">
                    <i className="ti ti-shopping-cart pra fs-30"></i>
                    <span className="shop__badge">3</span>
                  </Link>
                  <div className="dropdown profie__dropdown">
                    <Link
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
                    </Link>
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
                            <Link
                              href="profile.html"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-bell fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Profile{" "}
                              </span>
                            </Link>
                          </li>
                          <li className="mb-16">
                            <Link
                              href="javascript:void(0)"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-bell fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Theme{" "}
                              </span>
                            </Link>
                          </li>
                        </ul>
                        <ul className="list">
                          <li className="mb-16">
                            <Link
                              href="javascript:void(0)"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-credit-card-2-back fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Help{" "}
                              </span>
                            </Link>
                          </li>
                          <li className="mb-16">
                            <Link
                              href="javascript:void(0)"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-credit-card-2-back fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Send Feedback{" "}
                              </span>
                            </Link>
                          </li>
                          <li className="mb-16">
                            <Link
                              href="javascript:void(0)"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-gear fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Settings{" "}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="javascript:void(0)"
                              className="link d-flex align-items-center gap-2 dropdown-item"
                            >
                              <i className="bi bi-file-earmark-plus fs-20"></i>
                              <span className="d-block fs-16 pra fw-500 ">
                                {" "}
                                Log Out{" "}
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown notification__dropdown">
                    <Link
                      href="#"
                      className="link glose__icon"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,14"
                      aria-expanded="true"
                    >
                      <i className="ti ti-bell"></i>
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end "
                      data-popper-placement="bottom-end"
                    >
                      <ul className="list">
                        <li className="mb-16">
                          <Link href="#0" className="link d-flex dropdown-item">
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
                          </Link>
                        </li>
                        <li className="mb-16">
                          <Link href="#0" className="link d-flex dropdown-item">
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
                          </Link>
                        </li>
                        <li>
                          <Link href="#0" className="link d-flex dropdown-item">
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
                          </Link>
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
