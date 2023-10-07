"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  className?: string;
  icon: any;
  menuTitle: string;
  path: string;
  menuItems: { id: string; title: string; path: string; parentPath: string }[];
};

const NavbarDropdown = ({
  className,
  menuTitle,
  menuItems,
  icon,
  path,
}: Props) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <li
      onClick={() => setSubMenuOpen(!isSubMenuOpen)}
      className={`liclick ${className}`}
    >
      <span className="d-flex align-items-center">
        <Link
          href="#"
          className={`mclick d-flex hcolor align-items-center w-100 justify-content-between `}
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
          {menuItems.map(({ id, title, path, parentPath }) => {
            return (
              <li key={id}>
                <Link href={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default NavbarDropdown;
