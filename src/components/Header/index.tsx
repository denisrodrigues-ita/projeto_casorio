"use client";

import React from "react";
import links from "@/json/links.json";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <button className="menuBtn">
        <Bars3Icon className="menuSvg" />
      </button>
      <nav className="">
        <ul>
          <li>
            <Link className="linkMenu" href="/">
              Inicio <HomeIcon />
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="linkMenu" href="/confirm-presence">
              Confirmar Presença <CheckBadgeIcon />
            </Link>
          </li>
        </ul>

        <button
          onClick={handleOpen}
          onBlur={() => {
            setIsOpen(false);
          }}
          className="btnMenu"
        >
          Ver Mais{" "}
          <ChevronUpIcon className={isOpen ? "rotate-180" : "rotate-0"} />
        </button>
        <ul className="customUl">
          {links.map((link, index) => (
            <li
              key={index}
              className={`${
                isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              } liMenu`}
            >
              <Link
                className={`${isOpen ? "" : "hidden"} linkMenu`}
                href={link.link}
              >
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
