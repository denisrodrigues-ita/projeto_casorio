import React from "react";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { DdevSVG } from "@/assets/svg";
import Link from "next/link";

const Footer: React.FC = () => {
  const date = new Date();
  return (
    <footer>
      <p className="text-center">
        Entre em contato e faça um orçamento para o seu site.
      </p>
      <DdevSVG
        style={{
          textAlign: "center",
          width: "12rem",
          height: "8rem",
          fill: "#f7f3d5",
        }}
      />
      <div className="text-center">
        <Link href="https://wa.me/5535984484087" target="_blank">
          <AiOutlineWhatsApp className="link" />
        </Link>
        <Link
          href="https://www.instagram.com/denisrodrigues.ita/"
          target="_blank"
        >
          <AiOutlineInstagram className="link" />
        </Link>
        <Link href="mailto:denisrodrigues.ita@gmail.com">
          <AiOutlineMail className="link" />
        </Link>
        <p className="mt-4">
          © {date.getFullYear()} Ddev. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
