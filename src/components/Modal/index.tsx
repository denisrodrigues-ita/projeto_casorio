import Image from "next/image";
import React from "react";
import { useClipboard } from "@/hooks";
import { IModal } from "@/model/interface";
import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/24/outline";

const Modal = ({
  showModal,
  setShowModal,
  img,
  valor,
  pix_copia_e_cola,
  chave_pix,
}: IModal) => {
  const [isCopy, setIsCopy] = React.useState(false);
  const copyToClipboard = useClipboard();

  const handleText = () => {
    if (isCopy) {
      return (
        <p>
          Copiado <CheckIcon className="w-5 h-5 inline-block" />
        </p>
      );
    } else {
      return (
        <p>
          Pix copia e cola{" "}
          <DocumentDuplicateIcon className="w-5 h-5 inline-block" />
        </p>
      );
    }
  };

  const handleIsCopy = () => {
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), 2000);
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
              <h3 className="text-xl font-semibold text-primary">
                Pix de R$ {valor}
              </h3>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <Image
                src={img}
                alt="QR Code"
                width={300}
                height={300}
                loading="lazy"
              />
              <button
                className="px-4 py-2 bg-quinary rounded-lg font-bold text-primary hover:saturate-150 shadow"
                type="button"
                onClick={() => {
                  copyToClipboard(pix_copia_e_cola);
                  handleIsCopy();
                }}
              >
                {handleText()}
              </button>
              <p>
                Ou use a chave pix abaixo:
                <br />
                <span className="font-bold">{chave_pix}</span>
              </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 border-t border-primary rounded-b">
              <button
                onClick={() => setShowModal(false)}
                data-modal-hide="defaultModal"
                type="button"
                className="px-4 py-2 bg-quinary rounded-lg font-bold text-primary hover:saturate-150 shadow"
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
