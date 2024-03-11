import { Icon } from "@/app/Components/Icons/Icons";
import { Avatar, Badge, Button, Input } from "@nextui-org/react";

export default function CreatorMessage() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<div className="mb-5 flex items-center justify-end gap-2 lg:hidden">
				<Button isIconOnly className="bg-neutral-100">
					<Icon name="statistics-alt" className="size-5" />
				</Button>
				<Button isIconOnly className="bg-neutral-100">
					<Icon name="messanger" className="size-5" />
				</Button>
				<Button isIconOnly className="bg-neutral-100">
					<Icon name="plus-circle" className="size-5" />
				</Button>
			</div>

			<div className="mb-8">
				<Input
					type="email"
					placeholder="Search Chats..."
					variant="faded"
					radius="lg"
					startContent={
						<Icon
							name="search-alt"
							className="pointer-events-none size-5 flex-shrink-0 text-2xl text-default-400"
						/>
					}
				/>
			</div>

			<div className="-mt-2 mb-6 flex items-center gap-2 overflow-x-auto py-2">
				<Button className="shrink-0 border border-orange-500 bg-orange-500 font-semibold text-white hover:border-orange-500 hover:bg-orange-500 hover:text-white">
					All
				</Button>
				<Badge
					content="5"
					classNames={{
						badge: "bg-orange-500 text-white text-xs font-medium",
					}}>
					<Button className="shrink-0 border bg-transparent font-semibold hover:border-orange-500 hover:bg-orange-500 hover:text-white">
						Unread
					</Button>
				</Badge>
				<Button className="shrink-0 border bg-transparent font-semibold hover:border-orange-500 hover:bg-orange-500 hover:text-white">
					Online
				</Button>
				<Badge
					content="3"
					classNames={{
						badge: "bg-orange-500 text-white text-xs font-medium",
					}}>
					<Button className="shrink-0 border bg-transparent font-semibold hover:border-orange-500 hover:bg-orange-500 hover:text-white">
						Not answered
					</Button>
				</Badge>
				<Button className="shrink-0 border bg-transparent font-semibold hover:border-orange-500 hover:bg-orange-500 hover:text-white">
					Subscribe
				</Button>
			</div>

			<div className="space-y-4">
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Badge content="" color="success" shape="circle" placement="bottom-right">
							<Avatar size="lg" src="https://i.pravatar.cc/150?img=36" className="shrink-0" />
						</Badge>

						<div className="">
							<h6 className="mb-1 text-base font-medium">Kiki</h6>
							<p className="text-sm text-foreground-500">Thanks for followings my..</p>
						</div>
					</div>
					<div className="flex flex-col items-end gap-1 text-right">
						<span className="grid size-6 place-content-center rounded-full bg-orange-500 text-xs font-medium text-white">
							3
						</span>
						<span className="text-xs text-foreground-500">09:45 PM</span>
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Badge content="" color="default" shape="circle" placement="bottom-right">
							<Avatar size="lg" src="https://i.pravatar.cc/150?img=37" className="shrink-0" />
						</Badge>

						<div className="">
							<h6 className="mb-1 text-base font-medium">Kaka</h6>
							<p className="text-sm text-foreground-500">Hello! How are you?</p>
						</div>
					</div>
					<div className="flex flex-col items-end gap-1 text-right">
						<span className="grid size-6 place-content-center rounded-full bg-orange-500 text-xs font-medium text-white">
							12
						</span>
						<span className="text-xs text-foreground-500">2 days</span>
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Badge content="" color="default" shape="circle" placement="bottom-right">
							<Avatar size="lg" src="https://i.pravatar.cc/150?img=38" className="shrink-0" />
						</Badge>

						<div className="">
							<h6 className="mb-1 text-base font-medium">Kuku</h6>
							<p className="text-sm text-foreground-500">Thanks for followings my..</p>
						</div>
					</div>
					<div className="flex flex-col items-end gap-1 text-right">
						{/* <span className="grid size-6 place-content-center rounded-full bg-orange-500 text-xs font-medium text-white">
							12
						</span> */}
						<span className="text-xs text-foreground-500">30 Feb</span>
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Badge content="" color="success" shape="circle" placement="bottom-right">
							<Avatar size="lg" src="https://i.pravatar.cc/150?img=36" className="shrink-0" />
						</Badge>

						<div className="">
							<h6 className="mb-1 text-base font-medium">Kiki</h6>
							<p className="text-sm text-foreground-500">Thanks for followings my..</p>
						</div>
					</div>
					<div className="flex flex-col items-end gap-1 text-right">
						{/* <span className="grid size-6 place-content-center rounded-full bg-orange-500 text-xs font-medium text-white">
							3
						</span> */}
						<span className="text-xs text-foreground-500">09:45 PM</span>
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Badge content="" color="default" shape="circle" placement="bottom-right">
							<Avatar size="lg" src="https://i.pravatar.cc/150?img=37" className="shrink-0" />
						</Badge>

						<div className="">
							<h6 className="mb-1 text-base font-medium">Kaka</h6>
							<p className="text-sm text-foreground-500">Hello! How are you?</p>
						</div>
					</div>
					<div className="flex flex-col items-end gap-1 text-right">
						{/* <span className="grid size-6 place-content-center rounded-full bg-orange-500 text-xs font-medium text-white">
							12
						</span> */}
						<span className="text-xs text-foreground-500">2 days</span>
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Badge content="" color="default" shape="circle" placement="bottom-right">
							<Avatar size="lg" src="https://i.pravatar.cc/150?img=38" className="shrink-0" />
						</Badge>

						<div className="">
							<h6 className="mb-1 text-base font-medium">Kuku</h6>
							<p className="text-sm text-foreground-500">Thanks for followings my..</p>
						</div>
					</div>
					<div className="flex flex-col items-end gap-1 text-right">
						{/* <span className="grid size-6 place-content-center rounded-full bg-orange-500 text-xs font-medium text-white">
							12
						</span> */}
						<span className="text-xs text-foreground-500">30 Feb</span>
					</div>
				</div>
			</div>
		</div>
	);
}
