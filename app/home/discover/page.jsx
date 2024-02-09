import PostCard2 from "@/app/Components/Post/PostCard2";
import postData from "@/public/api/post.json";
import { Button, Link } from "@nextui-org/react";

export default async function Discover() {
	return (
		<div className="flex flex-col gap-6 lg:flex-row">
			<div className="flex items-center gap-3 lg:hidden">
				<Button size="lg" as={Link} href={"/home/discover"} fullWidth className="bg-neutral-100 font-semibold">
					Discover
				</Button>
				<Button size="lg" as={Link} href={"/home/discover/search"} fullWidth className="bg-neutral-100 font-semibold">
					Search
				</Button>
			</div>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
				{postData.map((post, index) => (
					<PostCard2 key={index} postData={post}></PostCard2>
				))}
			</div>
		</div>
	);
}
