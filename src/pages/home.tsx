import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div
				className="border border-slate-500 w-[200px] h-[200px] rounded-2xl
			flex items-center justify-center"
			>
				<Button variant="destructive">Hello World</Button>
			</div>
		</div>
	);
}
