import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ToastProps } from "@/model/interface";

const Toast: React.FC<ToastProps> = ({ message, setIsToastOpen, color }) => {
  return (
    <div
      className={`z-10 absolute flex text-white bg-${color}-600 p-2 justify-center items-center rounded-lg right-0 top-0`}
    >
      <div className="">{message}</div>
      <button
        className="shadow-none hover:opacity-80 hover:bg-opacity-80"
        type="button"
        onClick={() => setIsToastOpen(false)}
      >
        <span className="sr-only">fechar</span>
        <AiFillCloseCircle className="m-auto h-8 w-8" />
      </button>
    </div>
  );
};

export default Toast;
