import React from "react";
import Image from "next/image";
import suit1 from "../../../../public/assets/suits/suit1.svg";
import suit2 from "../../../../public/assets/suits/suit2.svg";
import suit3 from "../../../../public/assets/suits/suit3.svg";

const Costume = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2>Traje</h2>
      <h3>Passeio Completo</h3>
      <div className="flex my-8">
        <Image src={suit1} alt="pessoa de traje social" width={200} />
        <Image src={suit2} alt="pessoa de traje social" width={200} />
        <Image src={suit3} alt="pessoa de traje social" width={200} />
      </div>
    </div>
  );
};

export default Costume;
