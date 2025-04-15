import { z } from "zod";
import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "@/api/auth/update-password";
import { toast } from "sonner";

export const updatePasswordSchema = z.object({
  currentPassword: z.string().min(1, "A senha atual é obrigatória."),
  newPassword: z.string().min(8, "A nova senha deve ter no mínimo 8 caracteres.")
});

export function useUpdatePassword() {
  const form = useFormMutation({
    schema: updatePasswordSchema,
    defaultValues: {
      currentPassword: "",
      newPassword: ""
    },
    onSubmit: (data) => {
      updatePasswordFn(data);
    },
  });

  const { mutateAsync: updatePasswordFn, isPending: isLoadingUpdatePassword } = useMutation({
    mutationKey: ["update-password"],
    mutationFn: updatePassword,
    onSuccess: (response) => {
      if (response.success === true) {
        toast.success("Senha atualizada com sucesso!");
        form.reset();
        return;
      }

      toast.error(response.error);
    },
  });

  return {
    form,
    isLoadingUpdatePassword,
  };
}
