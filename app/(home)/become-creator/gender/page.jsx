// "use client";

import { Button, Link, Radio, RadioGroup } from "@nextui-org/react";

export default function Gender() {
	return (
		<div className="flex flex-1 flex-col justify-between gap-8">
			<div className="text-center">
				<h4 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">How do you identify?</h4>

				<div className="">
					<RadioGroup
						// defaultValue={["buenos-aires", "london"]}
						classNames={{
							base: "max-w-sm mx-auto",
							wrapper: "justify-center",
						}}>
						<Radio
							value="male"
							classNames={{
								base: "inline-flex text-center border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0 w-full max-w-full mx-auto",
								wrapper: "hidden",
								labelWrapper: "mx-auto",
								label: "inline-flex items-center text-center justify-center gap-2 group-data-[selected=true]:text-white",
							}}>
							🧔🏻‍♂️ Male
						</Radio>
						<Radio
							value="female"
							classNames={{
								base: "inline-flex text-center border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0 w-full max-w-full mx-auto",
								wrapper: "hidden",
								labelWrapper: "mx-auto",
								label: "inline-flex items-center text-center justify-center gap-2 group-data-[selected=true]:text-white",
							}}>
							👩🏻 Female
						</Radio>
						<Radio
							value="nonbinary"
							classNames={{
								base: "inline-flex text-center border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0 w-full max-w-full mx-auto",
								wrapper: "hidden",
								labelWrapper: "mx-auto",
								label: "inline-flex items-center text-center justify-center gap-2 group-data-[selected=true]:text-white",
							}}>
							Non-binary
						</Radio>
						<Radio
							value="other"
							classNames={{
								base: "inline-flex text-center border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0 w-full max-w-full mx-auto",
								wrapper: "hidden",
								labelWrapper: "mx-auto",
								label: "inline-flex items-center text-center justify-center gap-2 group-data-[selected=true]:text-white",
							}}>
							Other
						</Radio>
						<Radio
							value="prefernottosay"
							classNames={{
								base: "inline-flex text-center border border-orange-500/20 font-semibold rounded-xl data-[selected=true]:border-orange-500 data-[selected=true]:bg-orange-500 data-[selected=true]:shadow-sm transition m-0 w-full max-w-full mx-auto",
								wrapper: "hidden",
								labelWrapper: "mx-auto",
								label: "inline-flex items-center text-center justify-center gap-2 group-data-[selected=true]:text-white",
							}}>
							Prefer not to say
						</Radio>
					</RadioGroup>
				</div>
			</div>

			<div className="flex flex-col items-center justify-end gap-4 md:flex-row">
				{/* <Button
					as={Link}
					href={"/become-creator/profile"}
					variant="light"
					size="lg"
					className="font-semibold text-foreground-500 hover:text-foreground-900">
					Skip for now
				</Button> */}
				<Button
					as={Link}
					href={"/become-creator/profile"}
					size="lg"
					className="w-full bg-black font-semibold text-white md:w-auto">
					Continue
				</Button>
			</div>
		</div>
	);
}
