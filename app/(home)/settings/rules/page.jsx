import { Icon } from "@/app/Components/Icons/Icons";
import { Link } from "@nextui-org/react";

export default function Rules() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<h5 className="mb-4 flex items-center gap-2 text-base font-semibold md:mb-6 md:text-xl">
				<Icon name="document" className="size-6" />
				Bashable Rules
			</h5>

			<div className="space-y-3 lg:space-y-4">
				<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								Bashable Rule 1.1
							</Link>
						</h5>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">
							Yes, many of our policies offer customization options to align with your specific needs and
							budget.
						</p>
					</div>
				</div>
				<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								Bashable Rule 1.2
							</Link>
						</h5>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">
							Yes, many of our policies offer customization options to align with your specific needs and
							budget.
						</p>
					</div>
				</div>
				<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								Bashable Rule 1.3
							</Link>
						</h5>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">
							Yes, many of our policies offer customization options to align with your specific needs and
							budget.
						</p>
					</div>
				</div>
				<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								Bashable Rule 2.1
							</Link>
						</h5>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">
							Yes, many of our policies offer customization options to align with your specific needs and
							budget.
						</p>
					</div>
				</div>
				<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								Bashable Rule 2.2
							</Link>
						</h5>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">
							Yes, many of our policies offer customization options to align with your specific needs and
							budget.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
