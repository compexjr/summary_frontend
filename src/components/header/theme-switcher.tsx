import { Monitor, Moon, Sun } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme/use-theme";

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="border w-10 h-10 flex items-center justify-center rounded-md">
				{theme === "light" && <Sun size={20} />}

				{theme === "dark" && <Moon size={20} />}

				{theme === "system" && <Monitor size={20} />}
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("light")}
				>
					<Sun size={20} />
					Claro
				</DropdownMenuItem>

				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("dark")}
				>
					<Moon size={20} />
					Escuro
				</DropdownMenuItem>

				<DropdownMenuItem
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => setTheme("system")}
				>
					<Monitor size={20} />
					Sistema
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
