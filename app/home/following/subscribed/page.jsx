import { Button, Link, User } from "@nextui-org/react";

export default function Subscribed() {
	return (
		<div className="mt-4 divide-y-1 lg:mt-10">
			<div className="flex flex-col justify-between gap-2 py-4 md:flex-row md:items-center">
				<div className="flex flex-1 items-center justify-between gap-4">
					<Link href="">
						<User
							name="John Rogers"
							description="@rjohnai"
							avatarProps={{
								src: "https://i.pravatar.cc/150/1",
								size: "md",
								radius: "md",
							}}
							classNames={{
								name: "text-sm font-semibold text-black lg:text-base",
								description: "text-xs lg:text-sm text-foreground-500",
							}}
						/>
					</Link>
					<p className="text-xs font-semibold text-success-500 lg:text-sm">$40 / mo</p>
				</div>

				<div className="flex items-center gap-3">
					<Button className="w-full bg-neutral-100 font-semibold text-orange-600 md:w-auto">
						Unsubscribe
					</Button>
				</div>
			</div>
			<div className="flex flex-col justify-between gap-2 py-4 md:flex-row md:items-center">
				<div className="flex flex-1 items-center justify-between gap-4">
					<Link href="">
						<User
							name="Mattieu Donnet"
							description="@matthiu"
							avatarProps={{
								src: "https://i.pravatar.cc/150/2",
								size: "md",
								radius: "md",
							}}
							classNames={{
								name: "text-sm font-semibold text-black lg:text-base",
								description: "text-xs lg:text-sm text-foreground-500",
							}}
						/>
					</Link>
					<p className="text-xs font-semibold text-success-500 lg:text-sm">$40 / mo</p>
				</div>

				<div className="flex items-center gap-3">
					<Button className="w-full bg-neutral-100 font-semibold text-orange-600 md:w-auto">
						Unsubscribe
					</Button>
				</div>
			</div>
			<div className="flex flex-col justify-between gap-2 py-4 md:flex-row md:items-center">
				<div className="flex flex-1 items-center justify-between gap-4">
					<Link href="">
						<User
							name="Micky Mouse"
							description="@mickymouse"
							avatarProps={{
								src: "https://i.pravatar.cc/150/3",
								size: "md",
								radius: "md",
							}}
							classNames={{
								name: "text-sm font-semibold text-black lg:text-base",
								description: "text-xs lg:text-sm text-foreground-500",
							}}
						/>
					</Link>
					<p className="text-xs font-semibold text-success-500 lg:text-sm">$40 / mo</p>
				</div>

				<div className="flex items-center gap-3">
					<Button className="w-full bg-neutral-100 font-semibold text-orange-600 md:w-auto">
						Unsubscribe
					</Button>
				</div>
			</div>
			<div className="flex flex-col justify-between gap-2 py-4 md:flex-row md:items-center">
				<div className="flex flex-1 items-center justify-between gap-4">
					<Link href="">
						<User
							name="Lolita Gomez"
							description="@lotita16"
							avatarProps={{
								src: "https://i.pravatar.cc/150/4",
								size: "md",
								radius: "md",
							}}
							classNames={{
								name: "text-sm font-semibold text-black lg:text-base",
								description: "text-xs lg:text-sm text-foreground-500",
							}}
						/>
					</Link>
					<p className="text-xs font-semibold text-success-500 lg:text-sm">$40 / mo</p>
				</div>

				<div className="flex items-center gap-3">
					<Button className="w-full bg-neutral-100 font-semibold text-orange-600 md:w-auto">
						Unsubscribe
					</Button>
				</div>
			</div>
		</div>
	);
}
