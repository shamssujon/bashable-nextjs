import { Button, Link } from "@nextui-org/react";

export default function PaymentSettingsLayout({ children }) {
	return (
		<div className="mx-auto max-w-2xl">
			<div className="flex items-center gap-3">
				<Button
					size="lg"
					as={Link}
					href={"/home/settings/payments/income"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Income
				</Button>
				<Button
					size="lg"
					as={Link}
					href={"/home/settings/payments/outcome"}
					className="min-w-0 bg-neutral-100 text-sm font-semibold md:w-full md:text-base">
					Outcome
				</Button>
			</div>
			<div className="">{children}</div>
		</div>
	);
}
