import { Menu } from "./menu";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
	return (
		<header className="flex w-full justify-end  p-4 border-b border-muted">
			<div className="flex items-center gap-4">
				<ThemeSwitcher />

				<Menu />
			</div>
		</header>
	);
}
