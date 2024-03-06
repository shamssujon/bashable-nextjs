// using 'use client' to avoid the 'Error: Unknown element <[object Object]> in collection.' when using the select component from nextUI
"use client";

import { Icon } from "@/app/Components/Icons/Icons";
import Post from "@/app/Components/Post/Post";
import postData from "@/public/api/post.json";
import { Avatar, Button, Link, Select, SelectItem } from "@nextui-org/react";

const suggestedProfiles = [
	{
		handle: "@wandrille.90",
		avatar: "https://i.pravatar.cc/150?img=36",
	},
	{
		handle: "@reybaud",
		avatar: "https://i.pravatar.cc/150?img=31",
	},
	{
		handle: "@aliana53",
		avatar: "https://i.pravatar.cc/150?img=40",
	},
	{
		handle: "@mamert",
		avatar: "https://i.pravatar.cc/150?img=41",
	},
	{
		handle: "@amélien.44",
		avatar: "https://i.pravatar.cc/150?img=42",
	},
];

export default function Home() {
	return (
		<div className="flex flex-col gap-6 lg:flex-row">
			<div className="mx-auto max-w-lg 2xl:max-w-xl">
				<div className="mb-6 text-right">
					<Select size="sm" variant="bordered" className="md:max-w-40" defaultSelectedKeys="1">
						<SelectItem key={1} value="most-recent">
							Most Recent
						</SelectItem>
						<SelectItem key={2} value="popular">
							Popular
						</SelectItem>
						<SelectItem key={3} value="popular">
							Your Feed
						</SelectItem>
					</Select>
				</div>
				<div className="space-y-6">
					{postData.map((post, index) => (
						<Post key={index} postData={post}></Post>
					))}
				</div>
			</div>

			<div className="relative hidden w-[350px] xl:block">
				<div className="sticky top-24">
					<div className="">
						<h6 className="text-sm font-medium text-foreground-500">Suggested Profiles</h6>

						<div className="mt-6 space-y-6">
							{suggestedProfiles.map((profile, index) => (
								<div key={index} className="flex items-center justify-between gap-4">
									<Link href="" className="gap-2 text-sm font-semibold text-black lg:text-base">
										<Avatar src={profile.avatar} alt="" />
										<span>{profile.handle}</span>
									</Link>
									<div className="flex items-center gap-2">
										<Button className="bg-neutral-100 font-semibold">Subscribe</Button>
										<Button isIconOnly radius="full" className="bg-neutral-100">
											<Icon name="user-plus" className="h-6 w-6" />
										</Button>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="mt-10">
						<ul className="flex flex-wrap gap-x-1">
							<li className="before:mr-1 before:content-['\00B7'] first:before:hidden">
								<Link
									href=""
									className="text-sm text-foreground-500 transition hover:text-black hover:underline hover:underline-offset-2">
									About
								</Link>
							</li>
							<li className="before:mr-1 before:content-['\00B7'] first:before:hidden">
								<Link
									href=""
									className="text-sm text-foreground-500 transition hover:text-black hover:underline hover:underline-offset-2">
									Help & Support
								</Link>
							</li>
							<li className="before:mr-1 before:content-['\00B7'] first:before:hidden">
								<Link
									href=""
									className="text-sm text-foreground-500 transition hover:text-black hover:underline hover:underline-offset-2">
									Terms & Conditions
								</Link>
							</li>
							<li className="before:mr-1 before:content-['\00B7'] first:before:hidden">
								<Link
									href=""
									className="text-sm text-foreground-500 transition hover:text-black hover:underline hover:underline-offset-2">
									Privacy & Safety
								</Link>
							</li>
						</ul>
						<p className="mt-2 text-sm font-medium text-foreground-500">
							© 2023 Bashable.art, All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
