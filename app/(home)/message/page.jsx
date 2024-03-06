import { Link } from "@nextui-org/react";

export default function Message() {
	return (
		<div className="mt-5 space-y-3 lg:mt-6 lg:space-y-4">
			<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4 border-b pb-2">
					<h5 className="text-base font-semibold lg:text-lg">
						<Link
							href=""
							className="text-inherit] static text-base font-semibold after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
							Lioness
						</Link>
					</h5>
					<p className="text-sm text-foreground-500">10:04 AM</p>
				</div>
				<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
					<p className="text-sm text-foreground-500 lg:text-base">Welcome to the dens of the lion...</p>
					<span className="grid h-5 w-5 place-content-center rounded-full bg-[#FF550D] text-xs font-semibold leading-none text-white">
						2
					</span>
				</div>
			</div>
			<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4 border-b pb-2">
					<h5 className="text-base font-semibold lg:text-lg">
						<Link
							href=""
							className="text-inherit] static text-base font-semibold after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
							Lioness
						</Link>
					</h5>
					<p className="text-sm text-foreground-500">10:04 AM</p>
				</div>
				<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
					<p className="text-sm text-foreground-500 lg:text-base">Welcome to the dens of the lion...</p>
					<span className="grid h-5 w-5 place-content-center rounded-full bg-[#FF550D] text-xs font-semibold leading-none text-white">
						2
					</span>
				</div>
			</div>
			<div className="relative rounded-xl border bg-[#F2F2F2] p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4 border-b pb-2">
					<h5 className="text-base font-semibold lg:text-lg">
						<Link
							href="/promotions"
							className="text-inherit] static text-base font-semibold after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
							New feature launched!
						</Link>
					</h5>
					<p className="text-sm text-foreground-500">10:04 AM</p>
				</div>
				<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
					<p className="text-sm text-foreground-500 lg:text-base">We launched a new feature for users.</p>
					<span className="grid h-5 w-5 place-content-center rounded-full bg-[#FF550D] text-xs font-semibold leading-none text-white">
						2
					</span>
				</div>
			</div>
			<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4 border-b pb-2">
					<h5 className="text-base font-semibold lg:text-lg">
						<Link
							href=""
							className="text-inherit] static text-base font-semibold after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
							Lioness
						</Link>
					</h5>
					<p className="text-sm text-foreground-500">10:04 AM</p>
				</div>
				<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
					<p className="text-sm text-foreground-500 lg:text-base">Welcome to the dens of the lion...</p>
					<span className="grid h-5 w-5 place-content-center rounded-full bg-[#FF550D] text-xs font-semibold leading-none text-white">
						2
					</span>
				</div>
			</div>
		</div>
	);
}
