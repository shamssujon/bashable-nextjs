"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import PostCard3 from "@/app/Components/Post/PostCard3";
import postData from "@/public/api/post.json";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from "@nextui-org/react";

export default function PublicProfile() {
	return (
		<div className="mx-auto max-w-screen-lg">
			<div className="aspect-5/2 overflow-hidden rounded-xl">
				<Image
					removeWrapper
					src="https://picsum.photos/id/603/1000"
					alt=""
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="relative z-10 mx-auto -mt-20 h-40 w-40 overflow-hidden rounded-full bg-white p-2 md:-mt-24 md:ml-8 md:h-48 md:w-48">
				<Image
					removeWrapper
					src="https://i.pravatar.cc/300?img=36"
					alt=""
					className="h-full w-full rounded-full object-cover"
				/>
			</div>

			<div className="flex justify-between">
				<div className="max-w-md">
					<div className="">
						<div className="flex flex-wrap gap-4">
							<h3 className="text-xl font-semibold md:text-2xl ">John Rogers Miller</h3>
							<p className="mt-1 text-foreground-500">@rjohnai</p>
						</div>
						<p className="mt-2 text-sm text-foreground-600 md:text-base">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta exercitationem
							sapiente.
						</p>
					</div>

					<div className="mt-4 grid grid-cols-3 gap-6">
						<div className="">
							<h5 className="font-semibold">32</h5>
							<p className="text-foreground-500">posts</p>
						</div>
						<div className="">
							<h5 className="font-semibold">471</h5>
							<p className="text-foreground-500">Followers</p>
						</div>
						<div className="">
							<h5 className="font-semibold">184</h5>
							<p className="text-foreground-500">Following</p>
						</div>
					</div>
				</div>

				<Dropdown showArrow placement="bottom-end">
					<DropdownTrigger>
						<Button isIconOnly radius="full" className="ml-2 bg-transparent">
							<Icon name="settings" className="h-6 w-6" />
						</Button>
					</DropdownTrigger>

					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem
							key="public-profile"
							href="/home/public-profile"
							startContent={<Icon name="user" className="h-4 w-4" />}>
							View public profile
						</DropdownItem>

						<DropdownItem
							key="following"
							href="/home/following"
							startContent={<Icon name="user-check" className="h-4 w-4" />}>
							Following
						</DropdownItem>
						<DropdownItem
							key="followers"
							href="/home/followers"
							startContent={<Icon name="user-plus-alt" className="h-4 w-4" />}>
							Followers
						</DropdownItem>
						<DropdownItem
							key="transaction-history"
							href="/home/transactions/all"
							startContent={<Icon name="history" className="h-4 w-4" />}>
							Transaction History
						</DropdownItem>
						<DropdownItem
							key="edit-profile"
							href="/home/edit-profile"
							startContent={<Icon name="user-edit" className="h-4 w-4" />}>
							Edit profile
						</DropdownItem>
						<DropdownItem
							key="quest"
							href="/home/quest"
							startContent={<Icon name="hand-mike" className="h-4 w-4" />}>
							Quest
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>

			<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
				{postData.map((post, index) => (
					<PostCard3 key={index} postData={post}></PostCard3>
				))}
			</div>
		</div>
	);
}
