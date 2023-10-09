"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  className?: string;
  icon: any;
  menuTitle: string;
  path: string;
  menuItems: {
    id: string;
    title: string;
    childrenPath: string;
    parentPath: string;
  }[];
};

const NavbarDropdown = ({
  className,
  menuTitle,
  menuItems,
  icon,
  path,
}: Props) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [parentPath, setParentPath] = useState("");
  const pathName = usePathname();

  return (
    <li
      onClick={() => setSubMenuOpen(!isSubMenuOpen)}
      className={`liclick ${className}`}
    >
      <span className="d-flex align-items-center">
        <Link
          href="#"
          className={`mclick d-flex hcolor align-items-center w-100 justify-content-between ${
            parentPath === path ? "navbar-item-active" : ""
          }`}
        >
          <span className="d-flex click__title fs-16 bodyfont d-flex align-items-center gap-2">
            {icon}
            {menuTitle}
          </span>
          <span className="d-flex click__title align-items-center">
            {isSubMenuOpen ? <IconMinus /> : <IconPlus />}
          </span>
        </Link>
      </span>
      <div
        className={` menucontent menucontent-show ${
          isSubMenuOpen ? "active" : ""
        }`}
      >
        <ul>
          {menuItems.map(({ id, title, childrenPath, parentPath }) => {
            return (
              <li key={id} onClick={() => setParentPath(parentPath)}>
                <Link
                  className={`${
                    pathName === childrenPath ? "navbar-item-active" : ""
                  }`}
                  href={childrenPath}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default NavbarDropdown;
