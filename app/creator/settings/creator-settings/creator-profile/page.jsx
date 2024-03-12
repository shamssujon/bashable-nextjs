import { Switch } from "@nextui-org/react";

export default function CreatorProfileSettings() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<div className="space-y-3 lg:space-y-4">
				<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">Discoverability</h5>
						<Switch
							defaultSelected
							size="sm"
							classNames={{ wrapper: "group-data-[selected=true]:bg-orange-500" }}></Switch>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">
							Choose if you want to make yourself discoverable to other users
						</p>
					</div>
				</div>
				<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">Follow for Free &copy;</h5>
						<Switch size="sm" classNames={{ wrapper: "group-data-[selected=true]:bg-orange-500" }}></Switch>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">
							Choose if you want other users to follow you for free
						</p>
					</div>
				</div>
				<div className="relative rounded-xl border bg-neutral-50 p-4 lg:px-6 lg:py-4">
					<div className="flex items-center justify-between gap-4 border-b pb-2">
						<h5 className="text-base font-semibold lg:text-lg">Blur Preview Images</h5>
						<Switch size="sm" classNames={{ wrapper: "group-data-[selected=true]:bg-orange-500" }}></Switch>
					</div>
					<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
						<p className="text-sm text-foreground-500 lg:text-base">
							Choose if you want to show your paid content with a blurred preview
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
