import { Link } from "@nextui-org/react";

export default function Promotions() {
	return (
		<div className="mx-auto max-w-2xl">
			<h4 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">Promotions</h4>

			<div className="space-y-3 lg:space-y-4">
				<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="text-inherit] static text-base font-semibold after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								@erica posted her first post.
							</Link>
						</h5>
						<p className="shrink-0 text-sm text-foreground-500">10:04 AM</p>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">
							It&apos;s a big milestone for @erica as a …
						</p>
					</div>
				</div>
				<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="text-inherit] static text-base font-semibold after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								@juliana is selling her creations...
							</Link>
						</h5>
						<p className="shrink-0 text-sm text-foreground-500">10:04 AM</p>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">a 25% discounted cost for a day.</p>
					</div>
				</div>
				<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="text-inherit] static text-base font-semibold after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								@butch is saying this:
							</Link>
						</h5>
						<p className="shrink-0 text-sm text-foreground-500">10:04 AM</p>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">
							3 days are remaining to ....................
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
