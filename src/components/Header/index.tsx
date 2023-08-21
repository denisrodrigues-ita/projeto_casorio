import React from "react";
import links from "@/json/links.json";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.link}>{link.page}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
