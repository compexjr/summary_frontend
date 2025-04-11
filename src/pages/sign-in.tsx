import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { SignInForm } from "@/components/sign-in/sign-in-form";

export default function SignIn() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="flex flex-col gap-8 w-full max-w-[400px] rounded-lg">
				<SignInForm />

				<Button variant="link" className="w-full" asChild>
					<Link to="/cadastro">Não possui uma conta? Cadastre-se</Link>
				</Button>
			</div>
		</div>
	);
}
