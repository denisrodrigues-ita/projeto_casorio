import React from "react";
import Image from "next/image";
import { suit1, suit2, suit3 } from "@/assets/suits";
import { data } from "@/json";

const Costume = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2>Traje</h2>
      <h3>{data.traje}</h3>
      <div className="flex my-8">
        <Image
          src={suit2}
          alt="pessoa de traje social"
          className="w-28 sm:w-40 md:w-48 lg:w-full"
        />
        <Image
          src={suit3}
          alt="pessoa de traje social"
          className="w-28 sm:w-40 md:w-48 lg:w-full"
        />
        <Image
          src={suit1}
          alt="pessoa de traje social"
          className="w-28 sm:w-40 md:w-48 lg:w-full"
        />
      </div>
    </div>
  );
};

export default Costume;
