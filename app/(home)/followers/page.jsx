import { Link, User } from "@nextui-org/react";

export default function Followers() {
	return (
		<div className="mt-4 divide-y-1 lg:mt-10">
			<div className="flex items-center justify-between gap-4 py-4">
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
				<div className="">
					<p className="text-xs font-semibold text-orange-500 lg:text-sm">Not subscribed</p>
				</div>
			</div>
			<div className="flex items-center justify-between gap-4 py-4">
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
				<div className="">
					<p className="text-xs font-semibold text-success-500 lg:text-sm">Subscribed</p>
				</div>
			</div>
			<div className="flex items-center justify-between gap-4 py-4">
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
				<div className="">
					<p className="text-xs font-semibold text-orange-500 lg:text-sm">Not subscribed</p>
				</div>
			</div>
			<div className="flex items-center justify-between gap-4 py-4">
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
				<div className="">
					<p className="text-xs font-semibold text-orange-500 lg:text-sm">Not subscribed</p>
				</div>
			</div>
		</div>
	);
}
