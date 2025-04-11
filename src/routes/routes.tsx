import Home from "@/pages/home";
import { Route, Routes } from "react-router";
import SignUp from "@/pages/sign-up";
import SignIn from "@/pages/sign-in";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cadastro" element={<SignUp />} />
			<Route path="/entrar" element={<SignIn />} />
		</Routes>
	);
}
