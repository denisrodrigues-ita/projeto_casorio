import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IHotel } from "@/model/interface";

const HotelsCards = ({ hotel }: { hotel: IHotel }) => {
  const formatUrl = (url: string) => {
    const urlObj = new URL(url);
    let formattedUrl = urlObj.hostname + urlObj.pathname;

    if (formattedUrl.endsWith("/")) {
      formattedUrl = formattedUrl.slice(0, -1);
    }

    return formattedUrl;
  };

  return (
    <div className="flex flex-col text-center items-center md:flex-row md:text-start gap-4 mb-4 bg-quaternary rounded-lg">
      <Image
        src={hotel.img}
        alt={hotel.nome}
        width={400}
        height={400}
        className="rounded-none md:rounded-s-lg"
      />
      <div>
        <h3>{hotel.nome}</h3>
        <p>{`${hotel.endereco.rua}${hotel.endereco.rua && ","} ${
          hotel.endereco.numero
        }`}</p>
        <p>{`${hotel.endereco.bairro}${hotel.endereco.bairro && ","} ${
          hotel.endereco.cidade
        }${hotel.endereco.cidade && ","} ${hotel.endereco.estado}`}</p>
        {hotel.endereco.cep && <p>CEP: {hotel.endereco.cep}</p>}
        <Link href={hotel.page}>{formatUrl(hotel.page)}</Link>
        {hotel.endereco.telefone && (
          <p>
            Tel:{" "}
            <Link href={`tel:${hotel.endereco.telefone}`}>
              {hotel.endereco.telefone}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default HotelsCards;
