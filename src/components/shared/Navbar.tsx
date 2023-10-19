"use client";
import { mainNavbarData, sideBarData } from "@/../public/data/navBarData";
import { RootState } from "@/redux/store";
import { handleLinkClick } from "@/utils/handleLinkClick";
import { navbarContext } from "@/utils/reactContext";
import {
  IconBell,
  IconChecks,
  IconChevronDown,
  IconDots,
  IconMinus,
  IconPlus,
  IconSearch,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(navbarContext);
  const [isSubDropDownOpen, setSubDropDownOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState<string | null>(
    sideBarData[0].id
  );

  const pathName = usePathname();
  const { quantity } = useSelector((state: RootState) => state.cart.value);
  return (
    // <!-- Header Here -->
    <>
      <div className="header__section__attachment">
        <div className="container-fluid p-0-fluid p-0">
          <div className="d-flex">
            <div
              className={`sidebar-wrapper mainbg ${isSidebarOpen && "active"}`}
            >
              <div className="d-flex logo__wrap align-items-center justify-content-between position-relative">
                <Link
                  href="/"
                  className="logo"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Image
                    width={180}
                    height={52}
                    src="/img/logo/logo.png"
                    alt="img"
                  />
                </Link>
                <div
                  className="position-absolute  menu-close-button d-xl-none"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <IconX />
                </div>
              </div>
              <div className="sidebar__wrapbox">
                <ul className="sidebar__menu">
                  {/*==============side menu===== */}
                  {sideBarData.map(
                    ({ id, menuTitle, icon, className, path, menuItems }) => {
                      let isActive = menuItems?.some(
                        (path) => pathName == path.dropDownPath
                      );
                      return menuItems ? (
                        <li key={id} className={`liclick ${className}`}>
                          <span className="d-flex align-items-center">
                            <Link
                              onClick={() =>
                                setSubMenuOpen((prev) =>
                                  prev == id ? null : id
                                )
                              }
                              href="#"
                              className={`mclick d-flex hcolor align-items-center w-100 justify-content-between ${
                                isActive ? "navbar-item-active" : ""
                              }`}
                            >
                              <span className="d-flex click__title fs-16 bodyfont d-flex align-items-center gap-2">
                                {icon}
                                {menuTitle}
                              </span>
                              <span className="d-flex click__title align-items-center">
                                {isSubMenuOpen == id ? (
                                  <IconMinus />
                                ) : (
                                  <IconPlus />
                                )}
                              </span>
                            </Link>
                          </span>
                          <div
                            className={` menucontent menucontent-show ${
                              isSubMenuOpen == id ? "active" : ""
                            }`}
                          >
                            <ul>
                              {menuItems.map(({ id, title, dropDownPath }) => {
                                return (
                                  <li
                                    key={id}
                                    onClick={() => setIsSidebarOpen(false)}
                                  >
                                    <Link
                                      className={`${
                                        pathName === dropDownPath
                                          ? "navbar-item-active"
                                          : ""
                                      }`}
                                      href={dropDownPath}
                                    >
                                      {title}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </li>
                      ) : (
                        <li key={id} onClick={() => setIsSidebarOpen(false)}>
                          <Link
                            onClick={() => setSubMenuOpen(null)}
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
                    <button aria-label="submit button">
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
                            onMouseEnter={(e) => {
                              setSubDropDownOpen(!isSubDropDownOpen);
                              handleLinkClick(e);
                            }}
                            onMouseLeave={() => setSubDropDownOpen(false)}
                            href="#"
                            className={`mclick d-flex hcolor align-items-center w-100 justify-content-between`}
                          >
                            <IconDots />
                          </Link>
                        </span>
                        <div
                          className={`menucontent ${
                            isSubDropDownOpen ? "active" : ""
                          }`}
                        >
                          <ul
                            onMouseLeave={() => setSubDropDownOpen(false)}
                            onMouseEnter={() =>
                              setSubDropDownOpen(!isSidebarOpen && true)
                            }
                            className="menucontent-ul"
                          >
                            {menuItems.map(({ id, title, dropDownPath }) => {
                              return (
                                <li key={id}>
                                  <Link
                                    onClick={() => setSubMenuOpen(null)}
                                    href={dropDownPath}
                                    className={`${
                                      pathName == dropDownPath
                                        ? "main-menu-active"
                                        : ""
                                    }`}
                                  >
                                    {title}
                                  </Link>
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
                          className={`d-flex hcolor align-items-center gap-2 ${
                            pathName === path ? "main-menu-active" : ""
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
              <div className="menu__right__components d-flex align-items-center">
                <div className="menu__components d-flex align-items-center">
                  <Link href="cart" className="shop__tolley">
                    <IconShoppingCart className="pra fs-30" />
                    <span className="shop__badge">{quantity}</span>
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
                      <span className="d-flex fs-14 fw-500 pra align-items-center gap-1 d-none d-sm-block">
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
