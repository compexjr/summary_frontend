import { LogOut, Settings } from "lucide-react";
import { Avatar } from "./avatar";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ProfileSkeleton } from "./profile-skeleton";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/auth/get-profile";
import { Link } from "react-router";
import { useAuthStore } from "@/store/auth";

export function Menu() {
	const logout = useAuthStore((state) => state.logout);

	const { data: response, isPending } = useQuery({
		queryFn: getProfile,
		queryKey: ["get-profile"],
	});

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex items-center gap-4 cursor-pointer">
					<Button className="p-0 rounded-full bg-transparent">
						<Avatar src="" fall="IM" />
					</Button>

					{isPending && <ProfileSkeleton />}

					{!isPending && response?.success && (
						<div className="hidden flex-col text-sm sm:flex">
							<strong>{response.data.name}</strong>
							<span className="w-[200px]">{response.data.email}</span>
						</div>
					)}
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56 mr-4">
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Link to="/configuracoes" className="flex items-center gap-2">
							<Settings />
							<span>Configurações</span>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem className="!text-red-500" onClick={logout}>
					<LogOut className="!text-red-500" />
					<span>Sair</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
