"use client";
import React from "react";
import { api } from "@/services";
import { Spinner, Toast } from "@/components";

const ConfirmPresence = () => {
  const [isToastOpen, setIsToastOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsToastOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isToastOpen]);

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
      setIsToastOpen(true);
      setMessage("O código deve conter 6 dígitos");
      setColor("yellow");
      return false;
    }
    return true;
  };

  const handleResultValidation = (response?: Response, result?: any) => {
    if (response?.ok) {
      setIsToastOpen(true);
      setMessage(`${result.name}, sua presença foi confirmada!`);
      setColor("green");
      return;
    } else if (response === undefined) {
      setIsToastOpen(true);
      setMessage("Ocorreu um erro, tente novamente");
      setColor("red");
      return;
    } else {
      setIsToastOpen(true);
      setMessage("Código inválido");
      setColor("red");
    }
  };

  return (
    <div className="relative">
      {isToastOpen && (
        <Toast
          setIsToastOpen={setIsToastOpen}
          message={message}
          color={color}
        />
      )}
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
    </div>
  );
};

export default ConfirmPresence;
