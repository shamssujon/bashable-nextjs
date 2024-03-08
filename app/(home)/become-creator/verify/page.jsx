// "use client";

import { Icon } from "@/app/Components/Icons/Icons";
import { Button, Link } from "@nextui-org/react";

export default function Verify() {
	return (
		<div className="flex flex-1 flex-col justify-between gap-8">
			<div className="">
				<div className="text-center">
					<h4 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">Verify your identity</h4>

					<p className="mt-4 text-sm text-foreground-500">
						Identity verification consists of a few easy steps and shouldn&apos;t take more than minute or
						two. Don&apos;t worry, all your date is safe and secure.
					</p>
				</div>

				<div className="mt-6">
					<h4 className="mb-4 text-lg font-semibold md:mb-6 md:text-xl">Verify identity</h4>

					<div className="space-y-5">
						<div className="relative flex gap-4 rounded-xl bg-neutral-50 p-4 shadow-sm md:gap-5 lg:px-6 lg:py-4">
							<div className="mt-1 grid size-10 place-content-center rounded-xl border bg-neutral-100 md:size-12">
								<Icon name="user-card" className="size-6 md:size-7" />
							</div>
							<div className="flex-1">
								<div className="flex items-center justify-between gap-4 border-b pb-2">
									<h5 className="text-base font-semibold lg:text-lg">
										<Link
											href=""
											className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
											Identity Document Check
										</Link>
									</h5>
								</div>
								<div className="mt-2 flex flex-wrap items-center justify-between gap-3">
									<p className="text-sm text-foreground-500 lg:text-base">
										Please ensure that neither your face or any other information...
									</p>
								</div>
							</div>
						</div>
						<div className="relative flex gap-4 rounded-xl bg-neutral-50 p-4 shadow-sm md:gap-5 lg:px-6 lg:py-4">
							<div className="mt-1 grid size-10 place-content-center rounded-xl border bg-neutral-100 md:size-12">
								<Icon name="selfie" className="size-6 md:size-7" />
							</div>
							<div className="flex-1">
								<div className="flex items-center justify-between gap-4 border-b pb-2">
									<h5 className="text-base font-semibold lg:text-lg">
										<Link
											href=""
											className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
											Selfie - Liveness check
										</Link>
									</h5>
								</div>
								<div className="mt-2 flex flex-wrap items-center justify-between gap-3">
									<p className="text-sm text-foreground-500 lg:text-base">
										Please make sure there are no picture behind you or anything that might...
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
				<Button
					as={Link}
					href={"/become-creator/content"}
					variant="light"
					size="lg"
					className="font-semibold text-foreground-500 hover:text-foreground-900">
					Skip for now
				</Button>
				<Button
					as={Link}
					href={"/become-creator/content"}
					size="lg"
					className="w-full bg-black font-semibold text-white md:w-auto">
					Continue
				</Button>
			</div>
		</div>
	);
}
