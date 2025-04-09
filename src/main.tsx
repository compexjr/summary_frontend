import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/routes.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<AppRoutes />
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>
);
