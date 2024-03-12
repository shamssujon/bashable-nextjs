"use client";
import { Icon } from "@/app/Components/Icons/Icons";

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, User } from "@nextui-org/react";
import Image from "next/image";

export default function ExamplePost() {
	return (
		<div className="mx-auto max-w-md">
			<div className="flex items-center justify-between">
				<p className="text-sm">Test Post</p>
				<Dropdown showArrow placement="bottom-end">
					<DropdownTrigger>
						<Button isIconOnly radius="lg" className="ml-2 bg-transparent">
							<Icon name="ellipsis" className="size-6" />
						</Button>
					</DropdownTrigger>

					<DropdownMenu aria-label="Profile Actions" variant="flat" itemClasses={{}}>
						<DropdownItem key="1" href="" startContent={<Icon name="pencil-square" className="size-4" />}>
							Edit Post
						</DropdownItem>
						<DropdownItem key="2" href="" startContent={<Icon name="plus-circle" className="size-4" />}>
							Add Post Collage
						</DropdownItem>
						<DropdownItem key="3" href="" startContent={<Icon name="trash" className="size-4" />}>
							Delete Post
						</DropdownItem>
						<DropdownItem key="4" href="" startContent={<Icon name="pin" className="size-4" />}>
							Pin To Profile
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
			<div className="flex flex-col gap-3 rounded-2xl border bg-neutral-50/20 p-4">
				<div className="aspect-5/6 overflow-hidden rounded-xl">
					<Image
						src="https://mighty.tools/mockmind-api/content/human/76.jpg"
						alt=""
						width="600"
						height="600"
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="flex items-center justify-between gap-2">
					<Link href="" className="gap-2 text-sm font-semibold text-black lg:text-base">
						<User
							name="Original Sloth"
							description="@original - sloth-93"
							avatarProps={{
								src: "https://i.pravatar.cc/150?img=36",
							}}
						/>
					</Link>
				</div>
				<hr />
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-2">
						<div className="flex items-center gap-1">
							<Icon name="heart" className="h-5 w-5" />
						</div>
						<div className="flex items-center gap-1">
							<Icon name="bookmark" className="h-5 w-5" />
						</div>
					</div>

					<div className="rounded-xl bg-neutral-100 px-4 py-2 text-sm font-medium">Subscribers only</div>
				</div>
			</div>
		</div>
	);
}
