// "use client";

import { Button, Input, Link } from "@nextui-org/react";

export default function Subscription() {
	return (
		<div className="flex flex-1 flex-col justify-between gap-8">
			<div className="">
				<div className="text-center">
					<h4 className="mb-4 text-xl font-semibold md:text-2xl">Set Your Subscription price</h4>

					<p className="text-sm text-foreground-500">
						Set Your Monthly subscription price. You Will be able to change this later.
					</p>
				</div>

				<div className="mt-6">
					<Input
						type="number"
						placeholder="0"
						startContent={
							<div className="pointer-events-none flex items-center">
								<span className="text-lg text-default-900">$</span>
							</div>
						}
						description="Minimum $3.99. Maximum $100.00"
						classNames={{
							input: "text-lg font-medium",
							helperWrapper: "mt-1",
						}}
					/>
				</div>
			</div>

			<div className="flex flex-col items-center justify-end gap-4 md:flex-row">
				{/* <Button
					as={Link}
					href={"/become-creator/banner"}
					variant="light"
					size="lg"
					className="font-semibold text-foreground-500 hover:text-foreground-900">
					Skip for now
				</Button> */}
				<Button
					as={Link}
					href={"/become-creator/banner"}
					size="lg"
					className="w-full bg-black font-semibold text-white md:w-auto">
					Continue
				</Button>
			</div>
		</div>
	);
}
