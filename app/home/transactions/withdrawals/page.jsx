import { Icon } from "@/app/Components/Icons/Icons";

export default function Withdrawals() {
	return (
		<div className="mt-5 space-y-3 lg:mt-6 lg:space-y-4">
			<div className="rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4 border-b pb-2">
					<h5 className="text-base font-semibold lg:text-lg">You Withdrew $50.12</h5>
					<p className="text-sm text-foreground-500">10:04 AM</p>
				</div>
				<div className="mt-3">
					<p className="flex items-center gap-2 text-sm text-foreground-500 lg:text-base">
						<span className="">600.12 Credit</span>
						<span className="">
							<Icon name="swap" className="h-3 w-3" />
						</span>
						<span className="">$50.12</span>
					</p>
					<p className="mt-1 text-sm font-semibold text-success-500 lg:text-base">$50.12</p>
				</div>
			</div>
			<div className="rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4 border-b pb-2">
					<h5 className="text-base font-semibold lg:text-lg">You Withdrew $210.32</h5>
					<p className="text-sm text-foreground-500">11:04 AM</p>
				</div>
				<div className="mt-3">
					<p className="flex items-center gap-2 text-sm text-foreground-500 lg:text-base">
						<span className="">2600.12 Credit</span>
						<span className="">
							<Icon name="swap" className="h-3 w-3" />
						</span>
						<span className="">$210.32</span>
					</p>
					<p className="mt-1 text-sm font-semibold text-success-500 lg:text-base">$210.32</p>
				</div>
			</div>
		</div>
	);
}
