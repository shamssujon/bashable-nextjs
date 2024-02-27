import { Icon } from "@/app/Components/Icons/Icons";
import { Button, Image, Input, Link, Textarea } from "@nextui-org/react";

export default function EditProfile() {
	return (
		<div className="mx-auto max-w-screen-lg">
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
			<div className="relative mx-auto -mt-20 size-40 md:-mt-24 md:ml-8 md:size-48">
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

			<form className="mt-6 lg:mt-10">
				<div className="flex flex-col gap-4 lg:gap-8">
					<div className="">
						<Input
							size="lg"
							type="text"
							label="Name"
							labelPlacement="outside"
							placeholder="Name"
							classNames={{
								label: "text-sm font-semibold",
								inputWrapper: "px-6",
							}}
						/>
					</div>
					<div className="">
						<Input
							size="lg"
							type="text"
							label="Handle"
							labelPlacement="outside"
							placeholder="Handle"
							classNames={{
								label: "text-sm font-semibold",
								inputWrapper: "px-6",
							}}
						/>
					</div>
					<div className="">
						<Textarea
							size="lg"
							label="Bio"
							labelPlacement="outside"
							placeholder="Bio"
							classNames={{
								label: "text-sm font-semibold text-foreground",
								inputWrapper: "px-6",
							}}
						/>
					</div>

					<div className="mt-2 flex items-center justify-end gap-2">
						<Button as={Link} href={"/home/profile"} variant="light" size="lg" className=" font-semibold">
							Cancel
						</Button>
						<Button
							as={Link}
							href={"/home/profile"}
							size="lg"
							className="bg-black font-semibold text-white">
							Save Changes
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
