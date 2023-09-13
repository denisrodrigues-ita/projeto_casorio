"use client";

import React from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  CheckBadgeIcon,
  HomeIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { links } from "@/json";

const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = React.useState(false);
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = React.useState(false);

  const handleOpenDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  const handleOpenHamburgerMenu = () => {
    setIsOpenHamburgerMenu(!isOpenHamburgerMenu);
  };

  return (
    <header>
      <button
        onClick={handleOpenHamburgerMenu}
        type="button"
        className="hamburgerBtn hamburgerMenu"
      >
        {isOpenHamburgerMenu ? (
          <XMarkIcon className="svgMenu" />
        ) : (
          <Bars3Icon className="svgMenu" />
        )}
      </button>
      <nav className={`${isOpenHamburgerMenu ? "" : "hidden"} lg:flex`}>
        <ul className="menuUl">
          <li>
            <Link className="linkMenu" href="/">
              Inicio <HomeIcon />
            </Link>
          </li>
        </ul>

        <ul className="menuUl">
          <li>
            <Link className="linkMenu" href="/confirm-presence">
              Confirmar Presença <CheckBadgeIcon />
            </Link>
          </li>
        </ul>

        <button onClick={handleOpenDropDown} className="btn1 justify-start">
          Ver Mais{" "}
          <ChevronUpIcon
            className={`${
              isOpenDropDown ? "rotate-0" : "rotate-180"
            } chevronSvg`}
          />
        </button>
        <ul className={`${isOpenDropDown ? "block" : "hidden"} customUl`}>
          {links.map((link, index) => (
            <li key={index} className={`liMenu`}>
              <Link className={`linkMenu`} href={link.link}>
                {link.page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
