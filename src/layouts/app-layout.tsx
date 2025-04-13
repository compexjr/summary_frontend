import { Header } from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Outlet } from "react-router";

export default function AppLayout() {
	return (
		<div className="grid xl:grid-cols-[16rem_1fr] min-h-screen">
			<Sidebar />

			<main className="xl:col-start-2 max-w-[100vw] flex flex-col h-screen">
				<Header />

				<div className="p-4 flex-grow overflow-auto">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
