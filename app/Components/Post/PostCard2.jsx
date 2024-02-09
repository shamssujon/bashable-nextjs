import { Icon } from "@/app/Components/Icons/Icons";
import { Avatar, Button, Link } from "@nextui-org/react";
import Image from "next/image";

export default function PostCard2({ postData }) {
	const { handle, avatar, img, caption, likeCount, bookmarkCount } = postData;

	return (
		<div className="flex flex-col gap-3 rounded-2xl border bg-neutral-50/20 p-4">
			<div className="aspect-5/6 overflow-hidden rounded-xl">
				<Image src={img} alt="" width="600" height="600" className="h-full w-full object-cover" />
			</div>
			<div className="flex items-center justify-between gap-2">
				<Link href="" className="gap-2 text-sm font-semibold text-black lg:text-base">
					<Avatar src={avatar} alt="" />
					<span>{handle}</span>
				</Link>
				<Button isIconOnly radius="full" className="bg-neutral-100">
					<Icon name="user-plus" className="h-6 w-6" />
				</Button>
			</div>
			<hr />
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-6">
					<div className="flex items-center gap-1">
						<Icon name="heart" className="h-5 w-5" />
						<span className="text-sm font-medium">{likeCount}</span>
					</div>
					<div className="flex items-center gap-1">
						<Icon name="bookmark" className="h-5 w-5" />
						<span className="text-sm font-medium">{bookmarkCount}</span>
					</div>
				</div>

				<Button className="bg-neutral-100 font-semibold">Subscribe</Button>
			</div>
		</div>
	);
}
