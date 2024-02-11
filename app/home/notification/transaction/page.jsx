export default function TransactionNotification() {
	return (
		<div className="mt-5 space-y-3 lg:mt-6 lg:space-y-4">
			<div className="rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4 border-b pb-2">
					<h5 className="text-base font-semibold lg:text-lg">Credit Sent</h5>
					<p className="text-sm text-foreground-500">10:04 AM</p>
				</div>
				<div className="mt-3">
					<p className="text-sm text-foreground-500 lg:text-base">Paid to @Kristina for subscribption.</p>
					<p className="mt-1 text-sm font-semibold text-[#FF550D] lg:text-base">-120.89</p>
				</div>
			</div>
			<div className="rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4 border-b pb-2">
					<h5 className="text-base font-semibold lg:text-lg">Withdrawal</h5>
					<p className="text-sm text-foreground-500">10:04 AM</p>
				</div>
				<div className="mt-3">
					<p className="text-sm text-foreground-500 lg:text-base">You withdrew $100 for 500 credits.</p>
					<p className="mt-1 text-sm font-semibold text-success-500 lg:text-base">$100.00</p>
				</div>
			</div>
			<div className="rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4 border-b pb-2">
					<h5 className="text-base font-semibold lg:text-lg">Credit Sent</h5>
					<p className="text-sm text-foreground-500">10:04 AM</p>
				</div>
				<div className="mt-3">
					<p className="text-sm text-foreground-500 lg:text-base">Paid to @Kristina for subscribption.</p>
					<p className="mt-1 text-sm font-semibold text-[#FF550D] lg:text-base">-120.89</p>
				</div>
			</div>
			<div className="rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4 border-b pb-2">
					<h5 className="text-base font-semibold lg:text-lg">Withdrawal</h5>
					<p className="text-sm text-foreground-500">10:04 AM</p>
				</div>
				<div className="mt-3">
					<p className="text-sm text-foreground-500 lg:text-base">You withdrew $100 for 500 credits.</p>
					<p className="mt-1 text-sm font-semibold text-success-500 lg:text-base">$100.00</p>
				</div>
			</div>
		</div>
	);
}
