"use client";
import React from "react";
import { api } from "@/services";

const ConfirmPresence = () => {
  const [code, setCode] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (code === "") return;
    await api.put(code);
    setCode("");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Confirmar Presença</h1>
      <p className="text-center my-8">
        Pedimos a confirmação da presença para que possamos nos preparar da
        melhor forma para te receber.
      </p>
      <form action="submit" onClick={handleSubmit}>
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
          <button type="submit" className="btn1">
            Confirmar
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ConfirmPresence;
