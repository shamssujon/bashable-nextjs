import { Icon } from "@/app/Components/Icons/Icons";
import { Button } from "@nextui-org/react";

export default function WalletSettings() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<div className="rounded-2xl border p-4 lg:p-6">
				<h6 className="mb-4 font-medium">Wallet credits</h6>

				<div className="flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-center">
					<p className="text-4xl font-semibold">$0.00</p>

					<div className="text-center">
						<Button
							size="lg"
							radius="md"
							className="w-full bg-black text-base font-medium text-white lg:w-full lg:text-lg">
							Top up
						</Button>
					</div>
				</div>
			</div>

			<div className="mt-6 flex gap-4 rounded-xl bg-neutral-100 p-4">
				<Icon name="alert" className="mt-1 size-6 shrink-0 text-foreground-700" />
				<p className="text-sm text-foreground-500 lg:text-base">
					To use the wallet feature and add credits, please make sure to add a payment method to your account.
				</p>
			</div>

			<div className="mt-6">
				<h6 className="mb-4 font-medium">My Payment Methods</h6>
				<Button
					fullWidth
					size="lg"
					radius="md"
					startContent={<Icon name="card-plus" className="size-6" />}
					className="w-full bg-orange-500 text-base font-medium text-white lg:w-full lg:text-lg">
					Add Card
				</Button>
			</div>
		</div>
	);
}
