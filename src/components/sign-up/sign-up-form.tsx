import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/use-sign-up";
import { LoaderCircle } from "lucide-react";

export function SignUpForm() {
	const { form, isLoadingSignUp } = useSignUp();

	return (
		<Form {...form}>
			<div className="text-center flex flex-col mb-4">
				<h1 className="text-2xl font-bold">Cadastre-se</h1>

				<span className="text-muted-foreground text-sm">
					Digite seu nome, email e senha para se cadastrar.
				</span>
			</div>

			<form onSubmit={form.handleSubmitForm} className="space-y-4 w-[400px]">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome</FormLabel>

							<FormControl>
								<Input type="text" placeholder="Digite seu nome" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>

							<FormControl>
								<Input type="email" placeholder="Digite seu email" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Senha</FormLabel>

							<FormControl>
								<Input
									type="password"
									placeholder="Digite sua senha"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<span className="text-xs mt-1 block text-muted-foreground">
					A senha deve possuir no mínimo 8 caracteres. Deve conter pelo menos um
					número, uma letra maiúscula e um caractere especial.
				</span>

				<Button type="submit" className="w-full">
					{isLoadingSignUp && <LoaderCircle className="animate-spin" />}

					{!isLoadingSignUp && "Confirmar"}
				</Button>
			</form>
		</Form>
	);
}
