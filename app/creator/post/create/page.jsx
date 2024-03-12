// using 'use client' to avoid the 'Error: Unknown element <[object Object]> in collection.' when using the select component from nextUI
"use client";

import { Icon } from "@/app/Components/Icons/Icons";
import { Button, Image, Link, Select, SelectItem, Textarea } from "@nextui-org/react";

export default function CreatePost() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
				<h6 className="text-sm font-medium">Who can see my post</h6>
				<Select
					size="sm"
					variant="underlined"
					className="md:max-w-48"
					defaultSelectedKeys="1"
					classNames={{
						value: "font-medium text-base",
					}}>
					<SelectItem key={1} value="most-recent">
						Subscribers only
					</SelectItem>
					<SelectItem key={2} value="popular">
						My favourites
					</SelectItem>
					<SelectItem key={3} value="popular">
						Everyone
					</SelectItem>
				</Select>
			</div>

			<div className="">
				<div className="mt-6 grid grid-cols-2 gap-4">
					<div className="rounded-xl border bg-neutral-100">
						<input type="file" name="" id="postFile" className="hidden appearance-none" />
						<label
							htmlFor="postFile"
							className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2 p-2 text-center">
							<Icon name="cloud-up" className="size-9" />
							<p className="text-base font-semibold">Upload from device</p>
						</label>
					</div>

					<div className="relative">
						<div className="aspect-square overflow-hidden rounded-xl">
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
				</div>

				<div className="mt-6">
					<Textarea
						size="lg"
						variant="faded"
						placeholder="Write a caption..."
						classNames={{
							inputWrapper: "px-4",
						}}
					/>
				</div>

				<div className="mt-5 flex items-center justify-end gap-2">
					<Button isIconOnly className="bg-neutral-100">
						<Icon name="image" className="size-5" />
					</Button>
					<Button isIconOnly className="bg-neutral-100">
						<Icon name="time" className="size-5" />
					</Button>
					<Button isIconOnly className="bg-neutral-100">
						<Icon name="pencil-square" className="size-5" />
					</Button>
				</div>

				<div className="mt-5 flex items-center justify-end gap-2">
					<Button fullWidth className="bg-neutral-100">
						Schedule
					</Button>
					<Button fullWidth className="bg-neutral-100">
						Add to Collection
					</Button>
				</div>

				<div className="mt-5">
					<Button
						as={Link}
						href="/creator/post/example"
						fullWidth
						size="lg"
						className="h-auto bg-black py-3 text-lg font-semibold text-white">
						Create Post
					</Button>
					<Button
						fullWidth
						size="lg"
						startContent={<Icon name="plus-circle" className="size-5" />}
						className="bg-transparent font-medium text-orange-500">
						Add a new post (Max 10)
					</Button>
				</div>
			</div>
		</div>
	);
}
