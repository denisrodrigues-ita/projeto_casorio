import { IPix } from "@/model/interface";
import React from "react";
import Image from "next/image";
import { Modal } from "@/components";

const Card = ({ gift }: { gift: IPix }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="border border-primary p-2 w-full h-full rounded-lg shadow-lg flex flex-col justify-between">
      <Image
        src={gift.image}
        alt="pessoas comemorando"
        width={300}
        height={300}
        loading="lazy"
      />
      <div className="flex flex-col">
        <p className="mt-2">{gift.description}</p>
        <h2 className="text-4xl flex">
          <span className="text-sm leading-8">R$</span>
          {gift.pix}
        </h2>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="px-4 py-2 rounded-lg bg-quaternary shadow-lg hover:saturate-150 text-xl font-bold"
        >
          Contribuir
        </button>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        img={gift.QRCode}
        valor={gift.pix}
        pix_copia_e_cola={gift.QRCode_copia_e_cola}
        chave_pix={gift.chave_pix}
      />
    </div>
  );
};

export default Card;
