import { Button, Link } from "@nextui-org/react";

export default function LikePurchasedLayout({ children }) {
	return (
		<div className="mx-auto max-w-2xl">
			<div className="flex items-center gap-3">
				<Button
					size="lg"
					as={Link}
					href={"/home/my-likes"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					My Likes
				</Button>
				<Button
					size="lg"
					as={Link}
					href={"/home/my-likes/purchased"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Purchased
				</Button>
			</div>
			<div className="">{children}</div>
		</div>
	);
}
