"use client";
import PostCard3 from "@/app/Components/Post/PostCard3";
import postData from "@/public/api/post.json";
import { Image } from "@nextui-org/react";

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
			</div>

			<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
				{postData.map((post, index) => (
					<PostCard3 key={index} postData={post}></PostCard3>
				))}
			</div>
		</div>
	);
}
