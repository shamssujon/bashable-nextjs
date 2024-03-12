import { Icon } from "@/app/Components/Icons/Icons";
import { Button } from "@nextui-org/react";

export default function DeleteAccount() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<div className="mb-4">
				<p className="text-sm text-foreground-500">
					<span className="text-2xl font-semibold uppercase leading-none text-black">PERMANENTLY DELETE</span>{" "}
					your fanvue account with all your date?
				</p>
				<p className="mt-3 text-sm text-foreground-500">
					All data associated with your fanvue account will be permanently deleted.
				</p>
			</div>

			<div className="mb-4 flex items-center justify-center gap-3 rounded-xl border border-orange-500/50 bg-orange-500/10 p-4 text-center font-semibold text-orange-500">
				<Icon name="alert" className="size-6" />
				<p className="">Warning,this cannot be undone!</p>
			</div>

			<Button
				fullWidth
				startContent={<Icon name="trash-circle" />}
				className="h-auto border border-orange-500 bg-orange-500 py-3 text-lg font-semibold text-white shadow">
				Delete my account
			</Button>
		</div>
	);
}
