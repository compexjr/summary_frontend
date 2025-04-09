import Home from "@/pages/home";
import { Tasks } from "@/pages/tasks";
import { Route, Routes } from "react-router";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/tarefas" element={<Tasks />} />
		</Routes>
	);
}
