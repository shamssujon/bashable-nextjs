import { Avatar, Link } from "@nextui-org/react";
import Image from "next/image";

export default function Post({ postData }) {
	const { handle, avatar, img, caption } = postData;

	return (
		<div className="flex flex-col gap-2 rounded-2xl border p-4 bg-neutral-50/20">
			<div className="">
				<Link href="" className="gap-2 text-sm font-semibold text-black lg:text-base">
					<Avatar src={avatar} alt="" />
					<span>{handle}</span>
				</Link>
			</div>
			<div className="aspect-5/6 overflow-hidden rounded-xl">
				<Image src={img} alt="" width="600" height="600" className="h-full w-full object-cover" />
			</div>
			<div className="">
				<p className="text-xs">{caption}</p>
			</div>
		</div>
	);
}
