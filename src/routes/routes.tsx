import Home from "@/pages/home";
import { Route, Routes } from "react-router";
import { PublicRoutes } from "./public-routes";
import { PrivateRoutes } from "./private-routes";

import SignUp from "@/pages/sign-up";
import SignIn from "@/pages/sign-in";
import AppLayout from "@/layouts/app-layout";
import Settings from "@/pages/settings";

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<PublicRoutes />}>
				<Route path="/cadastro" element={<SignUp />} />

				<Route path="/entrar" element={<SignIn />} />
			</Route>

			<Route element={<PrivateRoutes />}>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home />} />

					<Route path="/configuracoes" element={<Settings />} />
				</Route>
			</Route>
		</Routes>
	);
}
