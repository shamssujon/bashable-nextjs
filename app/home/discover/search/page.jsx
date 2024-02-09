import { Icon } from "@/app/Components/Icons/Icons";
import PostCard2 from "@/app/Components/Post/PostCard2";
import postData from "@/public/api/post.json";
import { Button, Input, Link } from "@nextui-org/react";

export default async function Discover() {
	return (
		<div className="flex flex-col gap-6 lg:flex-row">
			<div className="lg:hidden">
				<div className="flex items-center gap-3">
					<Button
						size="lg"
						as={Link}
						href={"/home/discover"}
						fullWidth
						className="bg-neutral-100 font-semibold">
						Discover
					</Button>
					<Button
						size="lg"
						as={Link}
						href={"/home/discover/search"}
						fullWidth
						className="bg-neutral-100 font-semibold">
						Search
					</Button>
				</div>

				<div className="mt-4">
					<Input
						size="sm"
						type="text"
						placeholder="Search for creators..."
						startContent={
							<Icon
								name="search2"
								className="pointer-events-none h-4 w-4 flex-shrink-0 text-2xl text-default-400"
							/>
						}
					/>
				</div>
			</div>
			<div className="">
				<h5 className="mb-4 text-lg font-semibold">Suggested Creators</h5>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
					{postData.map((post, index) => (
						<PostCard2 key={index} postData={post}></PostCard2>
					))}
				</div>
			</div>
		</div>
	);
}
