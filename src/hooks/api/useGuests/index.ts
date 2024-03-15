import api from "@/services/api/axiosConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

const useUpdateGuest = () => {
  const context = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
  });

  const { mutate, isPending, isError, error, isSuccess, status, data } =
    useMutation<GuestData, Error, GuestUpdateProps, unknown>({
      mutationFn: (data) => endPoint(data),
      onSuccess: () => {
        context.reset();
      },
    });

  return {
    mutate,
    isPending,
    status,
    context,
    data,
    isError,
    error,
    isSuccess,
  };
};

const endPoint = async (data: GuestUpdateProps): Promise<GuestData> => {
  try {
    const response = await api.put(`/guests/public/${data.code}`, {
      attendance_status: true,
    });
    return response.data;
  } catch (error) {
    if ((error as any)?.response) {
      throw new Error((error as any)?.response.data.message);
    } else {
      throw new Error("Erro ao confirmar presença");
    }
  }
};

const schema = Yup.object({
  code: Yup.string()
    .min(6, "O código deve conter 6 caracteres")
    .max(6, "O código deve conter 6 caracteres")
    .required()
    .label("code"),
});

export type GuestUpdateProps = Yup.InferType<typeof schema>;

interface GuestData {
  active: boolean;
  attendance_status: boolean;
  code: string;
  created_at: string;
  engaged_id: number;
  id: number;
  message: string;
  name: string;
  updated_at: string;
}

export default useUpdateGuest;
