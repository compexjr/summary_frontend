import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { SignUpForm } from "@/components/sign-up/sign-up-form";

export default function SignUp() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="flex flex-col gap-8 w-full max-w-[400px] rounded-lg">
				<SignUpForm />

				<Button variant="link" className="w-full" asChild>
					<Link to="/entrar">Já possui uma conta? Faça login</Link>
				</Button>
			</div>
		</div>
	);
}
