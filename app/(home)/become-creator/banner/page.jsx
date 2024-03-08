// "use client";

import { Icon } from "@/app/Components/Icons/Icons";
import { Button, Image, Link, Textarea } from "@nextui-org/react";

export default function Banner() {
	return (
		<div className="flex flex-1 flex-col justify-between gap-8">
			<div className="">
				<h4 className="mb-4 text-center text-xl font-semibold md:mb-6 md:text-2xl">Set Your banner & bio</h4>

				<div className="relative">
					<div className="aspect-5/2 overflow-hidden rounded-xl">
						<Image
							removeWrapper
							src="https://picsum.photos/id/603/1000"
							alt=""
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="absolute right-2 top-2 z-10">
						<div className="relative">
							<Button isIconOnly size="sm" className="bg-orange-500 text-white shadow" radius="full">
								<Icon name="camera-plus" className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>

				<div className="mt-6">
					<Textarea
						size="lg"
						variant="faded"
						label="Bio"
						labelPlacement="outside"
						classNames={{
							label: "text-sm font-semibold",
							inputWrapper: "px-4",
						}}
					/>
				</div>
			</div>

			<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
				<Button
					as={Link}
					href={"/become-creator/subscription"}
					variant="light"
					size="lg"
					className="font-semibold text-foreground-500 hover:text-foreground-900">
					Skip for now
				</Button>
				<Button
					as={Link}
					href={"/become-creator/subscription"}
					size="lg"
					className="w-full bg-black font-semibold text-white md:w-auto">
					Continue
				</Button>
			</div>
		</div>
	);
}
