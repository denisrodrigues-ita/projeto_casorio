import Image from "next/image";
import React from "react";
import { useClipboard } from "@/hooks";
import { IModal } from "@/model/interface";
import {AiOutlineCopy, AiOutlineCheck} from "react-icons/ai";

const Modal = ({
  showModal,
  setShowModal,
  qr_code_img,
  value,
  code_qr_code,
  pix_key,
}: IModal) => {
  const [isCopy, setIsCopy] = React.useState(false);
  const copyToClipboard = useClipboard();

  const handleText = () => {
    if (isCopy) {
      return (
        <p>
          Copiado <AiOutlineCheck />
        </p>
      );
    } else {
      return (
        <p>
          Pix copia e cola <AiOutlineCopy />
        </p>
      );
    }
  };

  const handleIsCopy = () => {
    setIsCopy(true);
  };

  return (
    <>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          showModal ? "block" : "hidden"
        } fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center backdrop-blur`}
      >
        <div className="relative w-full max-w-2xl max-h-full border border-primary rounded-lg">
          {/* <!-- Modal content --> */}
          <div className="relative bg-quaternary rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t border-primary">
              <h3 className="text-xl font-semibold">Pix de R$ {value}</h3>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <Image
                src={qr_code_img}
                alt="QR Code"
                width={300}
                height={300}
                loading="lazy"
              />
              <button
                className="btn2"
                type="button"
                disabled={isCopy}
                onClick={() => {
                  copyToClipboard(code_qr_code);
                  handleIsCopy();
                }}
              >
                {handleText()}
              </button>
              <p>
                Ou use a chave pix abaixo:
                <br />
                <span className="font-bold">{pix_key}</span>
              </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 border-t border-primary rounded-b">
              <button
                onClick={() => {
                  setShowModal(false);
                  setIsCopy(false);
                }}
                data-modal-hide="defaultModal"
                type="button"
                className="btn2"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
