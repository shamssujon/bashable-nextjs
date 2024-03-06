import { Button, Link } from "@nextui-org/react";

export default function TransactionsLayout({ children }) {
	return (
		<div className="mx-auto max-w-2xl">
			<div className="flex items-center gap-3">
				<Button
					size="lg"
					as={Link}
					href={"/transactions/all"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					All Transactions
				</Button>
				<Button
					size="lg"
					as={Link}
					href={"/transactions/withdrawals"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Withdrawals
				</Button>
			</div>
			<div className="">{children}</div>
		</div>
	);
}
