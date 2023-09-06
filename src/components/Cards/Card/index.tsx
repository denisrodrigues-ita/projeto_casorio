import { IPix } from "@/model/interface";
import React from "react";
import Image from "next/image";

const Card = ({ gift }: { gift: IPix }) => {
  return (
    <div className="border border-primary p-2 w-full h-full rounded-lg shadow-lg">
      <Image
        src={gift.image}
        alt="pessoas comemorando"
        width={300}
        height={300}
        loading="lazy"
      />
      <p>{gift.description}</p>
      <h2 className="text-4xl flex">
        <span className="text-sm leading-8">R$</span>
        {gift.pix}
      </h2>
    </div>
  );
};

export default Card;
