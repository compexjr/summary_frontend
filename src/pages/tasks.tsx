"use client";
import { getTasks } from "@/api/tasks/get-task";
import { useQuery } from "@tanstack/react-query";
import { Dot, LoaderCircle } from "lucide-react";

export function Tasks() {
	const { data: result, isLoading } = useQuery({
		queryKey: ["tasks"],
		queryFn: getTasks,
	});

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div
				className="border border-slate-500 w-[500px] h-[400px] rounded-2xl
			flex items-center justify-center"
			>
				{isLoading && <LoaderCircle className="animate-spin" />}

				{!isLoading && result && result.success && (
					<div>
						{result.data.map((item) => (
							<div key={item.id} className="flex items-center">
								<Dot />
								{item.title}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
