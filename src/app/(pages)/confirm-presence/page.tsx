"use client";
import React from "react";
import { Spinner, Toast } from "@/components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUpdateGuest } from "@/hooks";
import { GuestUpdateProps } from "@/hooks/api/useGuests";

const ConfirmPresence = () => {
  const {
    mutate,
    isPending,
    status,
    context,
    data: guestData,
    isError,
    error,
    isSuccess,
  } = useUpdateGuest();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = context;

  const sendForm = async (data: GuestUpdateProps) => {
    mutate(data);
  };

  React.useEffect(() => {
    if (errors.code) {
      toast.warning(errors.code.message);
      return;
    }

    if (isSuccess && guestData) {
      toast.success(`${guestData.name}, sua presença foi confirmada!`);
      return;
    }

    if (isError && error) {
      toast.error(error.message);
    }
  }, [errors, isSuccess, guestData, isError, error]);

  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center">
        <h1>Confirmar Presença</h1>
        <p className="text-center my-8">
          Pedimos a confirmação da presença para que possamos nos preparar da
          melhor forma para te receber.
        </p>
        <form action="submit" onSubmit={handleSubmit(sendForm)}>
          <fieldset className="border border-primary rounded-lg p-4 flex flex-col gap-4">
            <legend className="">Confirme sua presença</legend>
            <label>
              Código de Confirmação:
              <input
                type="text"
                placeholder="Código de Confirmação"
                className="p-2 rounded-lg block text-quinary font-semibold"
                {...register("code")}
              />
            </label>
            <button type="submit" className="btn1" disabled={isPending}>
              {isPending ? <Spinner /> : "Confirmar"}
            </button>
          </fieldset>
        </form>
      </div>
      <Toast />
    </div>
  );
};

export default ConfirmPresence;
