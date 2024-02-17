import { Button, Link } from "@nextui-org/react";

export default function MessageLayout({ children }) {
	return (
		<div className="mx-auto max-w-2xl">
			<div className="flex items-center gap-3">
				<Button
					size="lg"
					as={Link}
					href={""}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					All
				</Button>
				<Button
					size="lg"
					as={Link}
					href={""}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Unread
				</Button>
				<Button
					size="lg"
					as={Link}
					href={""}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Online
				</Button>
			</div>
			<div className="">{children}</div>
		</div>
	);
}
