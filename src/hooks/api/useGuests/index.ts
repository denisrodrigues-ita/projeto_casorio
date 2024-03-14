import api from "@/services/api/axiosConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const useUpdateGuest = () => {
  const context = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
  });

  const { mutate, isPending, isError, isSuccess, status, data } = useMutation<
    unknown,
    Error,
    GuestUpdateProps,
    unknown
  >(endPoint as UseMutationOptions<unknown, Error, GuestUpdateProps, unknown>);

  return { mutate, isPending, status, context, data, isError, isSuccess };
};

const endPoint = async (data: GuestUpdateProps): Promise<unknown> => {
  try {
    const response = await api.put(
      `/guests/public/${data.code}`,
      data.attendance
    );
    return response.data;
  } catch (error) {
    throw new Error("Ocorreu um erro ao atualizar o hóspede");
  }
};

const schema = Yup.object({
  code: Yup.string()
    .min(6, "O código deve conter 6 caracteres")
    .max(6, "O código deve conter 6 caracteres")
    .required()
    .label("code"),
  attendance: Yup.object({ attendance_status: Yup.boolean().required() })
    .required()
    .label("data"),
});

type GuestUpdateProps = Yup.InferType<typeof schema>;

export default useUpdateGuest;
