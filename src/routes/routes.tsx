import Home from "@/pages/home";
import { Route, Routes } from "react-router";
import SignUp from "@/pages/sign-up";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cadastro" element={<SignUp />} />
		</Routes>
	);
}
