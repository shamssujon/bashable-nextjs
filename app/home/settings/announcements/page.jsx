import { Icon } from "@/app/Components/Icons/Icons";
import { Link } from "@nextui-org/react";

export default function Announcements() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<h5 className="mb-4 flex items-center gap-2 text-base font-semibold md:mb-6 md:text-xl">
				<Icon name="hand-mike-alt" className="size-6" />
				Announcements
			</h5>
			<div className="mt-5 space-y-3 lg:mt-6 lg:space-y-4">
				<div className="rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">Policy updated</h5>
						<p className="text-sm text-foreground-500">10:04 AM</p>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">
							The policy of our website has been updated.
						</p>
						<Link href="#" className="text-sm font-semibold text-[#FF550D]">
							Show More
						</Link>
					</div>
				</div>
				<div className="rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">New feature launched!</h5>
						<p className="text-sm text-foreground-500">10:04 AM</p>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">We launched a new feature for users.</p>
						<Link href="#" className="text-sm font-semibold text-[#FF550D]">
							Show More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
