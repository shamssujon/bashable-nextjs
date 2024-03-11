// using 'use client' to avoid the 'Error: Unknown element <[object Object]> in collection.' when using the select component from nextUI
"use client";

import { Icon } from "@/app/Components/Icons/Icons";
import { Image, Input, Select, SelectItem } from "@nextui-org/react";

export default function CreatorInsights() {
	return (
		<div className="mx-auto max-w-screen-lg space-y-6">
			<div className="relative overflow-hidden rounded-2xl p-4 lg:p-6">
				<Image
					removeWrapper
					isBlurred
					src="https://mighty.tools/mockmind-api/content/human/6.jpg"
					alt="NextUI Album Cover"
					classNames={{
						img: "w-full h-full object-cover absolute inset-0 -z-10 blur-lg",
					}}
				/>
				<div className="flex justify-center gap-2 text-center text-xl font-semibold text-white lg:text-2xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 19"
						className="mt-1 size-6">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8.043 18.387a.477.477 0 0 1-.939.042L5.23 9.809a1.596 1.596 0 0 1 1.242-1.897l3.086-.617a1.59 1.59 0 0 0 1.217-1.122l1.44-5.045a.479.479 0 0 1 .928.037l1.57 7.857a1.59 1.59 0 0 1-1.14 1.846l-3.725 1.016a1.59 1.59 0 0 0-1.159 1.336l-.645 5.167Z"
						/>
					</svg>
					<span className="drop-shadow">
						You are in the <span className="text-[#04FE4A]">Top 100% </span> of all creators
					</span>
				</div>
			</div>

			<div className="flex flex-col md:flex-row justify-between gap-4">
				<Select size="sm" radius="lg" variant="bordered" className="md:max-w-40" defaultSelectedKeys="1">
					<SelectItem key={1} value="last-7-days">
						Last 7 days
					</SelectItem>
					<SelectItem key={2} value="last-month">
						Last month
					</SelectItem>
					<SelectItem key={3} value="last-year">
						Last year
					</SelectItem>
				</Select>

				<div className="flex items-center gap-3">
					<Input size="sm" type="date" aria-label="from date" />
					<Input size="sm" type="date" aria-label="to date" />
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
				<div className="flex items-center justify-between gap-5 rounded-2xl border border-neutral-200/50 bg-neutral-100 p-3 lg:p-5">
					<div className="flex items-center gap-5">
						<div className="grid size-14 place-content-center rounded-xl border border-neutral-200/50 bg-white lg:size-16">
							<Icon name="doller-earn" className="size-7 lg:size-8" />
						</div>
						<div className="">
							<h6 className="text-base font-medium">Gross Earnings</h6>
						</div>
					</div>

					<h5 className="text-2xl font-semibold">$0.00</h5>
				</div>

				<div className="flex items-center justify-between gap-5 rounded-2xl border border-neutral-200/50 bg-neutral-100 p-3 lg:p-5">
					<div className="flex items-center gap-5">
						<div className="grid size-14 place-content-center rounded-xl border border-neutral-200/50 bg-white lg:size-16">
							<Icon name="dollar-cursor" className="size-7 lg:size-8" />
						</div>
						<div className="">
							<h6 className="text-base font-medium">Subscriptions</h6>
							<h5 className="text-2xl font-semibold">$0.00</h5>
						</div>
					</div>

					<div className="rounded-lg border border-neutral-200/50 bg-white px-3 py-1 text-base font-semibold">
						0%
					</div>
				</div>

				<div className="flex items-center justify-between gap-5 rounded-2xl border border-neutral-200/50 bg-neutral-100 p-3 lg:p-5">
					<div className="flex items-center gap-5">
						<div className="grid size-14 place-content-center rounded-xl border border-neutral-200/50 bg-white lg:size-16">
							<Icon name="eye" className="size-7 lg:size-8" />
						</div>
						<div className="">
							<h6 className="text-base font-medium">Pay to View</h6>
							<h5 className="text-2xl font-semibold">$0.00</h5>
						</div>
					</div>

					<div className="rounded-lg border border-neutral-200/50 bg-white px-3 py-1 text-base font-semibold">
						0%
					</div>
				</div>

				<div className="flex items-center justify-between gap-5 rounded-2xl border border-neutral-200/50 bg-neutral-100 p-3 lg:p-5">
					<div className="flex items-center gap-5">
						<div className="grid size-14 place-content-center rounded-xl border border-neutral-200/50 bg-white lg:size-16">
							<Icon name="renewal" className="size-7 lg:size-8" />
						</div>
						<div className="">
							<h6 className="text-base font-medium">Renewals</h6>
							<h5 className="text-2xl font-semibold">$0.00</h5>
						</div>
					</div>

					<div className="rounded-lg border border-neutral-200/50 bg-white px-3 py-1 text-base font-semibold">
						0%
					</div>
				</div>
			</div>
		</div>
	);
}
