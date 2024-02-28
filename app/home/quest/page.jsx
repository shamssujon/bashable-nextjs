import { Icon } from "@/app/Components/Icons/Icons";
import { Link, Progress } from "@nextui-org/react";

export default function Promotions() {
	return (
		<div className="mx-auto max-w-2xl">
            <h4 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">My Quests</h4>

			<div className="space-y-3 lg:space-y-4">
				<div className="relative flex items-start gap-4 rounded-xl border p-4 lg:px-6 lg:py-4">
					<div className="mt-1.5 shrink-0">
						<Icon name="user" className="size-6" />
					</div>
					<div className="space-y-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								Share first image on Discord.
							</Link>
						</h5>
						<Progress
							size="sm"
							aria-label="Pending..."
							value={60}
							classNames={{ track: "h-[5px]", indicator: "!bg-blue-400" }}
						/>
						<p className="text-sm text-foreground-500 lg:text-base">+10 credits</p>
					</div>
				</div>

				<div className="relative flex items-start gap-4 rounded-xl border p-4 lg:px-6 lg:py-4">
					<div className="mt-1.5 shrink-0">
						<Icon name="share" className="size-6" />
					</div>
					<div className="space-y-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								Share first creation on your profile.
							</Link>
						</h5>
						<Progress
							size="sm"
							aria-label="Pending..."
							value={30}
							classNames={{ track: "h-[5px]", indicator: "!bg-blue-400" }}
						/>
						<p className="text-sm text-foreground-500 lg:text-base">+10 credits</p>
					</div>
				</div>

				<div className="relative flex items-start gap-4 rounded-xl border p-4 lg:px-6 lg:py-4">
					<div className="mt-1.5 shrink-0">
						<Icon name="rocket" className="size-6" />
					</div>
					<div className="space-y-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								Share 20 image on your profile.
							</Link>
						</h5>
						<Progress
							size="sm"
							aria-label="Pending..."
							value={40}
							classNames={{ track: "h-[5px]", indicator: "!bg-blue-400" }}
						/>
						<p className="text-sm text-foreground-500 lg:text-base">+10 credits</p>
					</div>
				</div>

				<div className="relative flex items-start gap-4 rounded-xl border p-4 lg:px-6 lg:py-4">
					<div className="mt-1.5 shrink-0">
						<Icon name="user-heart" className="size-6" />
					</div>
					<div className="space-y-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								Get First Follower.
							</Link>
						</h5>
						<Progress
							size="sm"
							aria-label="Pending..."
							value={90}
							classNames={{ track: "h-[5px]", indicator: "!bg-blue-400" }}
						/>
						<p className="text-sm text-foreground-500 lg:text-base">+10 credits</p>
					</div>
				</div>

				<div className="relative flex items-start gap-4 rounded-xl border p-4 lg:px-6 lg:py-4">
					<div className="mt-1.5 shrink-0">
						<Icon name="bell-check" className="size-6" />
					</div>
					<div className="space-y-2">
						<h5 className="text-base font-semibold lg:text-lg">
							<Link
								href=""
								className="static text-base font-semibold text-inherit after:absolute after:inset-0 after:h-full after:w-full after:content-[''] lg:text-lg">
								Subscribe to your first creator.
							</Link>
						</h5>
						<Progress
							size="sm"
							aria-label="Pending..."
							value={50}
							classNames={{ track: "h-[5px]", indicator: "!bg-blue-400" }}
						/>
						<p className="text-sm text-foreground-500 lg:text-base">+10 credits</p>
					</div>
				</div>
			</div>
		</div>
	);
}
