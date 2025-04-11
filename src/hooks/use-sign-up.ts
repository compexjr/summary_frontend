import { z } from "zod";
import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/api/auth/sign-up";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const signUpSchema = z.object({
	name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
	email: z.string().email("Digite um email válido."),
	password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});

export function useSignUp() {
	const navigate = useNavigate();
	const form = useFormMutation({
		schema: signUpSchema,
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		onSubmit: (data) => {
			signUpFn(data);
		},
	});

	const { mutateAsync: signUpFn } = useMutation({
		mutationKey: ["sign-up"],
		mutationFn: signUp,
		onSuccess: (response) => {
			if (response.success === true) {
				navigate("/entrar");
				return;
			}

			toast.error(response.error);
		},
	});

	return {
		form,
	};
}
