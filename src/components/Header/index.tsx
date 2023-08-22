"use client";

import React from "react";
import links from "@/json/links.json";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-end mt-4">
      {/* <button>
        <Bars3Icon />
      </button> */}
      <nav className="flex flex-col lg:flex-row gap-4">
        <ul>
          <li className="liMenu">
            <Link className="linkMenu" href="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li className="liMenu">
            <Link className="linkMenu" href="/confirm-presence">Confirmar Presença</Link>
          </li>
        </ul>
        <ul>
          <button onClick={handleOpen} className="btnMenu">
            Ver Mais{" "}
            <ChevronUpIcon className={isOpen ? "rotate-180" : "rotate-0"} />
          </button>
          {links.map((link, index) => (
            <li
              key={index}
              className={`${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"} liMenu`}
            >
              <Link className="linkMenu" href={link.link}>{link.page}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
