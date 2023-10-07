"use client";
import { mainNavbarData, sideBarData } from "@/../public/data/navBarData";
import { handleLinkClick } from "@/utils/handleLinkClick";
import { navbarContext } from "@/utils/reactContext";
import {
  IconBell,
  IconChecks,
  IconChevronDown,
  IconDots,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
  const { isSidebarOpen } = useContext(navbarContext);
  const [isSubDropDownOpen, setSubDropDownOpen] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
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
                <Link href="/" className="logo">
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
                  {/*==============side menu===== */}
                  {sideBarData.map(
                    ({ id, menuTitle, icon, className, path, menuItems }) => {
                      return menuItems ? (
                        <NavbarDropdown
                          className={className}
                          key={id}
                          icon={icon}
                          path={path}
                          menuTitle={menuTitle}
                          menuItems={menuItems}
                        />
                      ) : (
                        <li key={id}>
                          <Link
                            href={path}
                            className={`d-flex hcolor align-items-center gap-2 ${
                              pathName === path ? "navbar-item-active" : ""
                            }`}
                          >
                            {icon}
                            {menuTitle}
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
            <div
              className={`header-wrapper mainbg menu-fixed ${
                isSidebarOpen && "body-collapse"
              }`}
            >
              {/*==============main menu===== */}
              <ul className="main-menuone">
                <li className="small__logo">
                  <Link href="/">
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
                      <IconSearch />
                    </button>
                    <input
                      type="text"
                      placeholder="Search songs, podcasts, albums..."
                    />
                  </form>
                </li>
                {mainNavbarData.map(
                  ({ id, menuTitle, icon, path, menuItems }) => {
                    return menuItems ? (
                      <li
                        key={id}
                        className="liclick xl__devicecustomize max-xl-none"
                      >
                        <span className="d-flex align-items-center">
                          <Link
                            onClick={(e) => {
                              setSubDropDownOpen(!isSubDropDownOpen);
                              handleLinkClick(e);
                            }}
                            href="#"
                            className="mclick d-flex hcolor align-items-center w-100 justify-content-between"
                          >
                            <IconDots />
                          </Link>
                        </span>
                        <div
                          className={`menucontent ${
                            isSubDropDownOpen ? "active" : ""
                          }`}
                        >
                          <ul>
                            {menuItems.map(({ id, title, path }) => {
                              return (
                                <li key={id}>
                                  <Link href={path}>{title}</Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    ) : (
                      <li key={id}>
                        <Link
                          href={path}
                          className="d-flex hcolor align-items-center gap-2"
                        >
                          {icon}
                          {menuTitle}
                        </Link>
                      </li>
                    );
                  }
                )}
              </ul>
              <div className="menu__right__components d-flex align-items-center">
                <div className="menu__components d-flex align-items-center">
                  <Link href="cart" className="shop__tolley">
                    <IconShoppingCart className="pra fs-30" />
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
                        <IconChevronDown />
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
                            <IconChecks className="checks" />
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
                              href="profile"
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
                              href="#"
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
                              href="#"
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
                              href="#"
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
                              href="#"
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
                              href="#"
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
                      <IconBell />
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
