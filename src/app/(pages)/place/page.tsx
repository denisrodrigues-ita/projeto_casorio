import Image from "next/image";
import data from "@/json/data.json";
import fachada from "@/assets/local/fachada.jpg";

const Local = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left sm:justify-start gap-4">
        <Image src={fachada} alt="fachada" className="rounded-lg sm:w-64" />
        <div className="mt-4 sm:my-0">
          <h1>{data.endereco.local}</h1>
          <p>{data.endereco.rua}</p>
          <p>
            {data.endereco.cidade} - {data.endereco.UF}
          </p>
          <p>{data.endereco.CEP}</p>
          <p>{data.data_e_horario}</p>
        </div>
      </div>
      <iframe
        src={data.maps}
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg w-full mt-4"
      ></iframe>
    </div>
  );
};

export default Local;
