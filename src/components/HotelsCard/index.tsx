import React from "react";
import HotelsCards from "./HotelsCards";
import { IHotel, IHotelList } from "@/model/interface";

const HotelsCard = ({ hotelsList }: IHotelList) => {
  return (
    <div>
      {hotelsList.map((hotel: IHotel, index) => (
        <HotelsCards key={index} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelsCard;
