import { Button, Link } from "@nextui-org/react";

export default function FollowingLayout({ children }) {
	return (
		<div className="mx-auto max-w-2xl">
			<div className="flex items-center gap-3">
				<Button
					size="lg"
					as={Link}
					href={"/following/subscribed"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Subscribed
				</Button>
				<Button
					size="lg"
					as={Link}
					href={"/following"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Followings
				</Button>
			</div>
			<div className="">{children}</div>
		</div>
	);
}
