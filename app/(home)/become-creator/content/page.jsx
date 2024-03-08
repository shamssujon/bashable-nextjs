// "use client";

import { Button, Checkbox, CheckboxGroup, Link } from "@nextui-org/react";

export default function Content() {
	return (
		<div className="flex flex-1 flex-col justify-between gap-8">
			<div className="text-center">
				<h4 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">What do you plan on creating?</h4>

				<div className="">
					<CheckboxGroup
						// defaultValue={["buenos-aires", "london"]}
						classNames={{
							base: "",
							wrapper: "flex-row flex-wrap justify-center",
							label: "",
						}}>
						<Checkbox
							value="food"
							classNames={{
								base: "inline-flex border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0",
								label: "inline-flex items-center justify-center gap-2 group-data-[selected=true]:text-white",
								wrapper: "hidden",
							}}>
							Food 🍔
						</Checkbox>
						<Checkbox
							value="fitness"
							classNames={{
								base: "inline-flex border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0",
								label: "inline-flex items-center justify-center gap-2 group-data-[selected=true]:text-white",
								wrapper: "hidden",
							}}>
							Fitness 💪
						</Checkbox>
						<Checkbox
							value="fashion"
							classNames={{
								base: "inline-flex border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0",
								label: "inline-flex items-center justify-center gap-2 group-data-[selected=true]:text-white",
								wrapper: "hidden",
							}}>
							Fashion 👗
						</Checkbox>
						<Checkbox
							value="music"
							classNames={{
								base: "inline-flex border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0",
								label: "inline-flex items-center justify-center gap-2 group-data-[selected=true]:text-white",
								wrapper: "hidden",
							}}>
							Music 🎵
						</Checkbox>
						<Checkbox
							value="gaming"
							classNames={{
								base: "inline-flex border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0",
								label: "inline-flex items-center justify-center gap-2 group-data-[selected=true]:text-white",
								wrapper: "hidden",
							}}>
							Gaming 🎮
						</Checkbox>
						<Checkbox
							value="beauty"
							classNames={{
								base: "inline-flex border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0",
								label: "inline-flex items-center justify-center gap-2 group-data-[selected=true]:text-white",
								wrapper: "hidden",
							}}>
							Beauty 😍
						</Checkbox>
						<Checkbox
							value="nsfw"
							classNames={{
								base: "inline-flex border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0",
								label: "inline-flex items-center justify-center gap-2 group-data-[selected=true]:text-white",
								wrapper: "hidden",
							}}>
							NSFW 🔞
						</Checkbox>
						<Checkbox
							value="dance"
							classNames={{
								base: "inline-flex border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0",
								label: "inline-flex items-center justify-center gap-2 group-data-[selected=true]:text-white",
								wrapper: "hidden",
							}}>
							Dance 💃
						</Checkbox>
						<Checkbox
							value="stocks"
							classNames={{
								base: "inline-flex border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0",
								label: "inline-flex items-center justify-center gap-2 group-data-[selected=true]:text-white",
								wrapper: "hidden",
							}}>
							Stocks 📈
						</Checkbox>
						<Checkbox
							value="irl"
							classNames={{
								base: "inline-flex border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0",
								label: "inline-flex items-center justify-center gap-2 group-data-[selected=true]:text-white",
								wrapper: "hidden",
							}}>
							IRL 😄
						</Checkbox>
						<Checkbox
							value="funny"
							classNames={{
								base: "inline-flex border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0",
								label: "inline-flex items-center justify-center gap-2 group-data-[selected=true]:text-white",
								wrapper: "hidden",
							}}>
							Funny 😂
						</Checkbox>
					</CheckboxGroup>
				</div>

				<p className="mt-4 border-t pt-2 text-center text-sm text-foreground-500">
					Please note ,if you select <strong>NSFW</strong> you will not be able to change this later without
					contacting support.
				</p>
			</div>

			<div className="flex flex-col items-center justify-end gap-4 md:flex-row">
				{/* <Button
					as={Link}
					href={"/become-creator/gender"}
					variant="light"
					size="lg"
					className="font-semibold text-foreground-500 hover:text-foreground-900">
					Skip for now
				</Button> */}
				<Button
					as={Link}
					href={"/become-creator/gender"}
					size="lg"
					className="w-full bg-black font-semibold text-white md:w-auto">
					Continue
				</Button>
			</div>
		</div>
	);
}
