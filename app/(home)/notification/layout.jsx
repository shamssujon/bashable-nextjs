import { Button, Link } from "@nextui-org/react";

export default function NotificationLayout({ children }) {
	return (
		<div className="mx-auto max-w-2xl">
			<div className="flex items-center gap-3">
				<Button
					size="lg"
					as={Link}
					href={"/notification/transaction"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Transaction
				</Button>
				<Button
					size="lg"
					as={Link}
					href={"/notification/post"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Post
				</Button>
				<Button
					size="lg"
					as={Link}
					href={"/notification/announcement"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Announcement
				</Button>
			</div>
			<div className="">{children}</div>
		</div>
	);
}
