// "use client";

import { Icon } from "@/app/Components/Icons/Icons";
import { Button, Image, Input, Link } from "@nextui-org/react";

export default function Profile() {
	return (
		<div className="flex flex-1 flex-col justify-between gap-8">
			<div className="text-center">
				<h4 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">Set Your profile picture & Handle </h4>

				<div className="relative mx-auto size-40 md:size-48">
					<div className="relative z-10 size-40 overflow-hidden rounded-full bg-white p-2 md:size-48">
						<Image
							removeWrapper
							src="https://i.pravatar.cc/300?img=36"
							alt=""
							className="h-full w-full rounded-full object-cover"
						/>
					</div>
					<div className="absolute bottom-3 right-3 z-10 md:bottom-4 md:right-4">
						<Button isIconOnly size="sm" className="bg-orange-500 text-white shadow" radius="full">
							<Icon name="camera-plus" className="h-4 w-4" />
						</Button>
					</div>
				</div>

				<div className="space-y-4">
					<Input type="text" size="lg" variant="underlined" labelPlacement="inside" label="Display Name" />
					<Input type="text" size="lg" variant="underlined" labelPlacement="inside" label="Handle" />
				</div>
			</div>

			<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
				<Button
					as={Link}
					href={"/become-creator/banner"}
					variant="light"
					size="lg"
					className="font-semibold text-foreground-500 hover:text-foreground-900">
					Skip for now
				</Button>
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
