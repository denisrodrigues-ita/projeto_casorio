"use client";

import React from "react";
import data from "@/json/data.json";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const Gifts = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="cursor-pointer w-full flex justify-between text-2xl border border-quaternary p-2 rounded-lg"
      >
        Mensagem do casal{" "}
        <button
          type="button"
          className="bg-quaternary rounded-full flex justify-center items-center p-1 h-8 w-8"
        >
          <ChevronUpIcon
            className={`${
              isOpen
                ? "duration-300 ease-in-out rotate-180"
                : "duration-300 ease-in-out rotate-0"
            } m-0`}
          />
        </button>
      </div>
      <p
        className={`${
          isOpen
            ? "opacity-100 max-h-full duration-500 ease-in-out"
            : "opacity-0 max-h-0 duration-500 ease-in-out"
        } text-justify border border-quaternary p-2 pt-4 rounded-b-lg border-t-0 -translate-y-2`}
      >
        {data.texto_geral.texto}
      </p>
    </div>
  );
};

export default Gifts;
