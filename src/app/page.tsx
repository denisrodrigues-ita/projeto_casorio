"use client";

import React from "react";
import dynamic from "next/dynamic";
import data from "@/json/data.json";

const Home = () => {
  const NoSSR = dynamic(() => import("@/components/Countdown"), { ssr: false });
  const targetDate = new Date(`${data.data_casamento} 00:00:00`);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-9xl ">
        {data.nome_noivo} <span className="text-7xl">&</span>
      </h1>
      <h1 className="text-9xl ml-24">{data.nome_noiva}.</h1>
      <div className="border-quaternary border-y-2 mt-4 w-4/5 sm:w-2/4 lg:w-4/12 flex justify-center">
        <h2 className="text-6xl my-4">{data.data_casamento}</h2>
      </div>
      <div className="mt-8">
        <p className="text-2xl">Contagem regressiva para o grande dia.</p>
        <NoSSR targetDate={targetDate} />
      </div>
    </div>
  );
};

export default Home;
