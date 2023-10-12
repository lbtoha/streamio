"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction } from "react";

type Props = {
  id: string;
  className?: string;
  icon: any;
  menuTitle: string;
  isActive: boolean | undefined;
  isSubMenuOpen: string;
  setSubMenuOpen: React.Dispatch<SetStateAction<string>>;
  menuItems: {
    id: string;
    title: string;
    dropDownPath: string;
  }[];
};

const NavbarDropdown = ({
  id,
  className,
  menuTitle,
  menuItems,
  icon,
  isActive,
  isSubMenuOpen,
  setSubMenuOpen,
}: Props) => {
  // const [isSubMenuOpen, setSubMenuOpen] = useState("");
  const pathName = usePathname();

  const handleSubMenuOpen = (id: string) => {
    setSubMenuOpen(id);
  };

  return (
    <li className={`liclick ${className}`}>
      <span className="d-flex align-items-center">
        <Link
          onClick={() => handleSubMenuOpen(id)}
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
          {menuItems.map(({ id, title, dropDownPath }) => {
            return (
              <li key={id}>
                <Link
                  className={`${
                    pathName === dropDownPath ? "navbar-item-active" : ""
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
  );
};

export default NavbarDropdown;
