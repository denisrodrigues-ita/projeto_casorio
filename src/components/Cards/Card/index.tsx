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
        className="m-auto"
      />
      <div className="flex flex-col mt-2">
        <p>{gift.description}</p>
        <h2 className="flex">
          {!isNaN(parseFloat(gift.value)) && <span className="text-sm leading-8">R$</span>}
          {gift.value}
        </h2>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="btn1"
        >
          Fazer Pix
        </button>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        value={gift.value}
        qr_code_img={gift.qr_code_img}
        pix_key={gift.pix_key}
        code_qr_code={gift.code_qr_code}
        image={""}
        description={""}
      />
    </div>
  );
};

export default Card;
