"use client";

import React from "react";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCheckCircle,
  AiOutlineHome,
  AiOutlineDown,
} from "react-icons/ai";
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
        onClick={() => {
          handleOpenHamburgerMenu();
          setIsOpenDropDown(false);
        }}
        type="button"
        className="hamburgerBtn hamburgerMenu"
      >
        {isOpenHamburgerMenu ? (
          <AiOutlineClose className="svgMenu" />
        ) : (
          <AiOutlineMenu className="svgMenu" />
        )}
      </button>
      <nav className={`${isOpenHamburgerMenu ? "" : "hidden"} lg:flex`}>
        <ul className="menuUl">
          <li>
            <Link
              onClick={() => {
                setIsOpenDropDown(false);
                setIsOpenHamburgerMenu(false);
              }}
              className="linkMenu"
              href="/"
            >
              Inicio <AiOutlineHome />
            </Link>
          </li>
        </ul>

        <ul className="menuUl">
          <li>
            <Link
              onClick={() => {
                setIsOpenDropDown(false);
                setIsOpenHamburgerMenu(false);
              }}
              className="linkMenu"
              href="/confirm-presence"
            >
              Confirmar Presença <AiOutlineCheckCircle />
            </Link>
          </li>
        </ul>

        <button onClick={handleOpenDropDown} className="btn1 justify-start">
          Ver Mais{" "}
          <AiOutlineDown
            className={`${
              isOpenDropDown ? "rotate-0" : "rotate-180"
            } chevronSvg`}
          />
        </button>
        <ul className={`${isOpenDropDown ? "block" : "hidden"} customUl`}>
          {links.map((link, index) => (
            <li key={index} className={`liMenu`}>
              <Link
                onClick={() => {
                  setIsOpenDropDown(false);
                  setIsOpenHamburgerMenu(false);
                }}
                className={`linkMenu`}
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
