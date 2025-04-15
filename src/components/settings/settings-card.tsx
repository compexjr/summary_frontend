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
import { useUpdatePassword } from "@/hooks/use-update-password";
import { LoaderCircle, KeyRound } from "lucide-react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

export function UpdatePasswordCard() {
	const { form, isLoadingUpdatePassword } = useUpdatePassword();

	return (
		<Card className="w-full shadow-none overflow-auto pb-0">
			<CardHeader>
				<div className="flex items-center w-full gap-2">
					<KeyRound className="w-5 h-5" />
					<h2 className="text-lg font-semibold">Alterar senha</h2>
				</div>
			</CardHeader>

			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmitForm}
						className="space-y-4 max-w-[600px]"
					>
						<FormField
							control={form.control}
							name="currentPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Senha atual</FormLabel>

									<FormControl>
										<Input
											type="password"
											placeholder="Digite sua senha atual"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="newPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nova senha</FormLabel>

									<FormControl>
										<Input
											type="password"
											placeholder="Digite sua nova senha"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<span className="text-xs mt-1 block text-muted-foreground">
							A senha deve possuir no mínimo 8 caracteres. Deve conter pelo
							menos um número, uma letra maiúscula e um caractere especial.
						</span>
					</form>
				</Form>
			</CardContent>

			<CardFooter className="flex p-4 justify-end border-t bg-muted">
				<Button
					onClick={form.handleSubmitForm}
					disabled={isLoadingUpdatePassword}
				>
					{isLoadingUpdatePassword && (
						<LoaderCircle className="mr-2 animate-spin" />
					)}
					{!isLoadingUpdatePassword && "Alterar senha"}
				</Button>
			</CardFooter>
		</Card>
	);
}
