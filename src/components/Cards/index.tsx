import React from "react";
import { IPix, IPixList } from "@/model/interface";
import Card from "./Card";

const Cards = ({ giftsList }: IPixList) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
      {giftsList.map((gift: IPix, index) => (
        <Card key={index} gift={gift} />
      ))}
    </div>
  );
};

export default Cards;
