"use client";
import React from "react";
import { api } from "@/services";
import { Spinner, Toast } from "@/components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConfirmPresence = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [code, setCode] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidCode = handleCodeVerification(code);
    if (!isValidCode) return;
    const { response, result } = await api.put(code, setIsLoading);
    handleResultValidation(response, result);
    setCode("");
  };

  const handleCodeVerification = (code: string) => {
    if (code.length != 6) {
      toast.warning("O código deve conter 6 dígitos");
      return false;
    }
    return true;
  };

  const firstLetterToUpperCase = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  const handleResultValidation = (response?: Response, result?: any) => {
    if (response?.ok) {
      toast.success(`${firstLetterToUpperCase(result.name)}, sua presença foi confirmada!`);
      return;
    } else if (response === undefined) {
      toast.error("Ocorreu um erro, tente novamente");
      return;
    } else {
      toast.error("Código inválido");
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center">
        <h1>Confirmar Presença</h1>
        <p className="text-center my-8">
          Pedimos a confirmação da presença para que possamos nos preparar da
          melhor forma para te receber.
        </p>
        <form action="submit" onSubmit={handleSubmit}>
          <fieldset className="border border-primary rounded-lg p-4 flex flex-col gap-4">
            <legend className="">Confirme sua presença</legend>
            <label>
              Código de Confirmação:
              <input
                type="text"
                placeholder="Código de Confirmação"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="p-2 rounded-lg block text-quinary font-semibold"
              />
            </label>
            <button type="submit" className="btn1" disabled={isLoading}>
              {isLoading ? <Spinner /> : "Confirmar"}
            </button>
          </fieldset>
        </form>
      </div>
      <Toast />
    </div>
  );
};

export default ConfirmPresence;
