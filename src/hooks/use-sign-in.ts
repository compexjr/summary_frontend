import { z } from "zod";
import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth/sign-in";
import { useAuthStore } from "@/store/auth";
import { toast } from "sonner";

export const signInSchema = z.object({
	email: z.string().email("Digite um email válido."),
	password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});

export function useSignIn() {
	const authenticate = useAuthStore((state) => state.authenticate);
	const form = useFormMutation({
		schema: signInSchema,
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: (data) => {
			signInFn(data);
		},
	});

	const { mutateAsync: signInFn, isPending: isLoadingSignIn } = useMutation({
		mutationKey: ["sign-in"],
		mutationFn: signIn,
		onSuccess: (response) => {
			if (response.success) {
				authenticate(response.data.token);
				return;
			}

			toast.error(response.error);
		},
	});

	return { form, isLoadingSignIn };
}
