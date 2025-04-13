import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/routes.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query.ts";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/use-theme.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
					<AppRoutes />
				</ThemeProvider>
			</QueryClientProvider>

			<Toaster richColors />
		</BrowserRouter>
	</StrictMode>
);
