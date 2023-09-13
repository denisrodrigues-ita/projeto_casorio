import React from "react";
import { hotels } from "@/json";
import HotelsCard from "@/components/HotelsCard";

const Tips = () => {
  return (
    <div>
      <HotelsCard hotelsList={hotels} />
    </div>
  );
};

export default Tips;
