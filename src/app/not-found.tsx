import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound404 } from "@/assets/svg";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <h1>Página não encontrada.</h1>
      <Link className="font-medium hover:underline" href="/">
        Clique aqui para voltar ao inicio.
      </Link>
      <Image src={notFound404} alt="pagina não encontrada" />
    </div>
  );
};

export default NotFound;
