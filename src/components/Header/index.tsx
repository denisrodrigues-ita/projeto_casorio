"use client";

import React from "react";
import links from "@/json/links.json";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
        className="menuBtn hamburgerMenu"
      >
        {isOpenHamburgerMenu ? (
          <XMarkIcon className="menuSvg" />
        ) : (
          <Bars3Icon className="menuSvg" />
        )}
        {/* <Bars3Icon className="menuSvg" /> */}
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

        <button onClick={handleOpenDropDown} className="btnMenu">
          Ver Mais{" "}
          <ChevronUpIcon
            className={`${
              isOpenDropDown ? "rotate-180" : "rotate-0"
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
