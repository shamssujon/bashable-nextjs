import { Icon } from "@/app/Components/Icons/Icons";
import { Button, Checkbox, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";

import mastercardLogo from "@/public/icons/mastercard.svg";
export default function WalletAndPayments() {
	return (
		<div className="mx-auto max-w-screen-lg lg:py-6">
			<div className="">
				<h4 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">My Wallet</h4>

				<div className="relative grid grid-cols-1 gap-8 overflow-hidden rounded-xl p-6 md:grid-cols-2 lg:gap-10 lg:px-10 lg:py-14">
					<Image
						removeWrapper
						isBlurred
						src="https://mighty.tools/mockmind-api/content/human/6.jpg"
						alt="NextUI Album Cover"
						classNames={{
							img: "w-full h-full object-cover absolute inset-0 -z-10 blur-xl",
						}}
					/>
					<div className="space-y-4 text-center">
						<h6 className="text-lg leading-none text-white">Bashable Credits</h6>
						<h4 className="text-2xl font-bold text-white">650.165</h4>
						<Button
							as={Link}
							href=""
							fullWidth
							className="h-auto rounded-full bg-white/50 py-3 text-base font-semibold text-white backdrop-blur-lg">
							Top Up
						</Button>
					</div>
					<div className="space-y-4 text-center">
						<h6 className="text-lg leading-none text-white">Refundable Credits</h6>
						<div className="flex items-center justify-center gap-4">
							<h4 className="text-2xl font-bold text-white">650.165</h4>
							<Icon name="swap" className="h-6 w-6 text-white" />
							<h4 className="text-2xl font-bold text-white">$50.104</h4>
						</div>
						<Button
							as={Link}
							href=""
							fullWidth
							className="h-auto rounded-full bg-white/50 py-3 text-base font-semibold text-white backdrop-blur-lg">
							Withdraw
						</Button>
					</div>
				</div>
			</div>

			<div className="mt-10">
				<h4 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">Payment Methods</h4>

				<div className="">
					<div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
						<div className="space-y-4 rounded-xl border bg-neutral-50 p-4">
							<div className="flex items-center justify-between gap-2">
								<NextImage src={mastercardLogo} alt="" className="h-6 w-auto" />
								<p className="text-sm font-semibold text-blue-400">Connected</p>
							</div>

							<hr />

							<div className="flex items-center justify-between gap-2">
								<div className="flex items-center gap-3">
									<div className="inline-flex items-center gap-0.5">
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
									</div>
									<div className="inline-flex items-center gap-0.5">
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
									</div>
									<div className="inline-flex items-center gap-0.5">
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
									</div>
									<span className="text-sm font-semibold">2766</span>
								</div>

								<div className="">
									<Checkbox size="sm" isDisabled>
										Make Primary
									</Checkbox>
								</div>
							</div>
						</div>
						<div className="space-y-4 rounded-xl border bg-neutral-50 p-4">
							<div className="flex items-center justify-between gap-2">
								<NextImage src={mastercardLogo} alt="" className="h-6 w-auto" />
								<p className="text-sm font-semibold text-blue-400">Connected</p>
							</div>

							<hr />

							<div className="flex items-center justify-between gap-2">
								<div className="flex items-center gap-3">
									<div className="inline-flex items-center gap-0.5">
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
									</div>
									<div className="inline-flex items-center gap-0.5">
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
									</div>
									<div className="inline-flex items-center gap-0.5">
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
										<span className="block h-1 w-1 shrink-0 rounded-full bg-black"></span>
									</div>
									<span className="text-sm font-semibold">2766</span>
								</div>

								<div className="">
									<Checkbox size="sm">Make Primary</Checkbox>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-8 text-center">
						<Button
							as={Link}
							href=""
							fullWidth
							className="h-auto max-w-sm bg-black py-3 text-lg font-semibold text-white ">
							Add a new payment method
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
