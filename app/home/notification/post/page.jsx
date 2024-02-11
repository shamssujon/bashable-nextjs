import { Image } from "@nextui-org/react";

export default function PostNotification() {
	return (
		<div className="mt-5 space-y-3 lg:mt-6 lg:space-y-4">
			<div className="rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4">
					<h5 className="text-base font-semibold lg:text-lg">@Kristina posted a new post</h5>
					<p className="text-sm text-foreground-500">10:04 AM</p>
				</div>
				<div className="mt-3">
					<div className="aspect-square overflow-hidden rounded-xl">
						<Image
							removeWrapper
							src="https://i.pravatar.cc/500?img=5"
							alt=""
							className="h-full w-full object-cover"
						/>
					</div>
					<p className="mt-2 text-sm text-foreground-500 lg:text-base">
						Your following @Kristina posted a new video
					</p>
				</div>
			</div>
			<div className="rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
				<div className="flex items-center justify-between gap-4">
					<h5 className="text-base font-semibold lg:text-lg">@erica posted a new post</h5>
					<p className="text-sm text-foreground-500">10:04 AM</p>
				</div>
				<div className="mt-3">
					<div className="aspect-square overflow-hidden rounded-xl">
						<Image
							removeWrapper
							src="https://i.pravatar.cc/500?img=19"
							alt=""
							className="h-full w-full object-cover"
						/>
					</div>
					<p className="mt-2 text-sm text-foreground-500 lg:text-base">
						Your following @erica posted a new post
					</p>
				</div>
			</div>
		</div>
	);
}
