import { Button, Link } from "@nextui-org/react";

export default function FollowersLayout({ children }) {
	return (
		<div className="mx-auto max-w-2xl">
			<div className="flex items-center gap-3">
				<Button
					size="lg"
					as={Link}
					href={"/followers/fans"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Your Fans
				</Button>
				<Button
					size="lg"
					as={Link}
					href={"/followers"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Followers
				</Button>
			</div>
			<div className="">{children}</div>
		</div>
	);
}
