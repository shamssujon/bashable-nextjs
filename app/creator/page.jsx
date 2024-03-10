// using 'use client' to avoid the 'Error: Unknown element <[object Object]> in collection.' when using the select component from nextUI
"use client";

import { Icon } from "@/app/Components/Icons/Icons";
import { Button, Image, Progress } from "@nextui-org/react";

const suggestedProfiles = [
	{
		handle: "@wandrille.90",
		avatar: "https://i.pravatar.cc/150?img=36",
	},
	{
		handle: "@reybaud",
		avatar: "https://i.pravatar.cc/150?img=31",
	},
	{
		handle: "@aliana53",
		avatar: "https://i.pravatar.cc/150?img=40",
	},
	{
		handle: "@mamert",
		avatar: "https://i.pravatar.cc/150?img=41",
	},
	{
		handle: "@amélien.44",
		avatar: "https://i.pravatar.cc/150?img=42",
	},
];

export default function CreatorHome() {
	return (
		<div className="mx-auto max-w-screen-lg space-y-6">
			<div className="relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl p-4 lg:p-6">
				<Image
					removeWrapper
					isBlurred
					src="https://mighty.tools/mockmind-api/content/human/9.jpg"
					alt="NextUI Album Cover"
					classNames={{
						img: "w-full h-full object-cover absolute inset-0 -z-10 blur-lg",
					}}
				/>
				<div className="text-white">
					<h4 className="text-xl font-semibold lg:text-2xl">Your Bashble Moments!</h4>
					<p className="mt-1 text-sm text-white/80 lg:text-base">Discover Your account highlights</p>
				</div>
				<Button
					isIconOnly
					radius="full"
					aria-label="Like"
					className="group static bg-transparent text-white after:absolute after:inset-0 after:h-full after:w-full after:content-['']">
					<Icon
						name="arrow-right"
						className="size-7 transition will-change-transform group-hover:translate-x-1"
					/>
				</Button>
			</div>

			<div className="rounded-2xl border p-4 lg:p-6">
				<h6 className="mb-6 font-medium">Complete Your Profile</h6>

				<div className="flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-end">
					<div className="max-w-md flex-1">
						<Progress
							label="2/8 Steps"
							value={25}
							showValueLabel={true}
							classNames={{
								base: "",
								track: "",
								indicator: "",
								labelWrapper: "flex-row-reverse items-center mb-2",
								label: "text-sm font-medium",
								value: "font-semibold !text-4xl",
							}}
						/>
					</div>

					<div className="text-center">
						<Button
							size="lg"
							radius="sm"
							className="h-auto w-full bg-orange-500 py-3 text-base font-medium text-white lg:w-full lg:text-lg">
							Complete your profile
						</Button>
					</div>
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
