"use client";
import React from "react";

const ConfirmPresence = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            Nome Completo:
            <input
              type="text"
              placeholder="Nome completo"
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
