import {
	Avatar as AvatarRoot,
	AvatarImage,
	AvatarFallback,
} from "@/components/ui/avatar";

interface AvatarProps {
	src: string;
	fall: string;
}

export function Avatar({ fall, src }: AvatarProps) {
	return (
		<AvatarRoot
			className="w-10 h-10 overflow-hidden rounded-full
				flex items-center justify-center bg-muted text-muted-foreground"
		>
			<AvatarImage src={src} />
			<AvatarFallback>{fall}</AvatarFallback>
		</AvatarRoot>
	);
}
