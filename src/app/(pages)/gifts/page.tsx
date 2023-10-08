"use client";

import React from "react";
import data from "@/json/data.json";
import { Cards } from "@/components";
import { AiOutlineDown } from "react-icons/ai";
import { pix } from "@/json";

const Gifts = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div className="mb-4">
        <div
          onClick={handleClick}
          className="cursor-pointer w-full flex justify-between text-2xl border border-primary p-2 rounded-lg"
        >
          Mensagem do casal{" "}
          <button
            type="button"
            className="bg-primary rounded-full flex justify-center items-center p-1 h-8 w-8"
          >
            <AiOutlineDown
              className={`${
                isOpen
                  ? "duration-500 ease-in-out rotate-0"
                  : "duration-500 ease-in-out rotate-180"
              } m-0 text-quinary`}
            />
          </button>
        </div>
        <p
          className={`${
            isOpen ? "block" : "hidden"
          } text-justify border border-primary p-2 pt-4 rounded-b-lg border-t-0 -translate-y-2`}
        >
          {data.texto_geral.texto}
        </p>
      </div>
      <Cards giftsList={pix} />
    </main>
  );
};

export default Gifts;
