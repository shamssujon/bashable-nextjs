import { Avatar, Button } from "@nextui-org/react";

export default function CreatorNotifications() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<div className="mb-6 flex items-center gap-2 overflow-x-auto py-2">
				<Button className="shrink-0 border border-orange-500 bg-orange-500 font-semibold text-white hover:border-orange-500 hover:bg-orange-500 hover:text-white">
					All
				</Button>
				<Button className="shrink-0 border bg-transparent font-semibold hover:border-orange-500 hover:bg-orange-500 hover:text-white">
					Subscriptions
				</Button>
				<Button className="shrink-0 border bg-transparent font-semibold hover:border-orange-500 hover:bg-orange-500 hover:text-white">
					Tips
				</Button>
				<Button className="shrink-0 border bg-transparent font-semibold hover:border-orange-500 hover:bg-orange-500 hover:text-white">
					Purchases
				</Button>
				<Button className="shrink-0 border bg-transparent font-semibold hover:border-orange-500 hover:bg-orange-500 hover:text-white">
					Comment
				</Button>
			</div>

			<div className="space-y-4">
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Avatar size="lg" src="https://i.pravatar.cc/150?img=36" className="shrink-0" />
						<div className="">
							<h6 className="mb-1 text-base font-medium">Kiki</h6>
							<p className="text-sm text-foreground-500">Started a free promotion..</p>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Avatar size="lg" src="https://i.pravatar.cc/150?img=36" className="shrink-0" />
						<div className="">
							<h6 className="mb-1 text-base font-medium">Kiki</h6>
							<p className="text-sm text-foreground-500">Started a free promotion..</p>
						</div>
					</div>
					<div className="rounded-md border border-orange-500/40 px-2 py-1 text-center text-xs leading-tight text-orange-500">
						<span>70%</span> <br /> Discount
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Avatar size="lg" src="https://i.pravatar.cc/150?img=36" className="shrink-0" />
						<div className="">
							<h6 className="mb-1 text-base font-medium">Kiki</h6>
							<p className="text-sm text-foreground-500">Started a free promotion..</p>
						</div>
					</div>
					<div className="rounded-md border border-orange-500/40 px-2 py-1 text-center text-xs leading-tight text-orange-500">
						<span>70%</span> <br /> Discount
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Avatar size="lg" src="https://i.pravatar.cc/150?img=36" className="shrink-0" />
						<div className="">
							<h6 className="mb-1 text-base font-medium">Kiki</h6>
							<p className="text-sm text-foreground-500">Started a free promotion..</p>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Avatar size="lg" src="https://i.pravatar.cc/150?img=36" className="shrink-0" />
						<div className="">
							<h6 className="mb-1 text-base font-medium">Kiki</h6>
							<p className="text-sm text-foreground-500">Started a free promotion..</p>
						</div>
					</div>
					<div className="rounded-md border border-orange-500/40 px-2 py-1 text-center text-xs leading-tight text-orange-500">
						<span>70%</span> <br /> Discount
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Avatar size="lg" src="https://i.pravatar.cc/150?img=36" className="shrink-0" />
						<div className="">
							<h6 className="mb-1 text-base font-medium">Kiki</h6>
							<p className="text-sm text-foreground-500">Started a free promotion..</p>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Avatar size="lg" src="https://i.pravatar.cc/150?img=36" className="shrink-0" />
						<div className="">
							<h6 className="mb-1 text-base font-medium">Kiki</h6>
							<p className="text-sm text-foreground-500">Started a free promotion..</p>
						</div>
					</div>
					<div className="rounded-md border border-orange-500/40 px-2 py-1 text-center text-xs leading-tight text-orange-500">
						<span>70%</span> <br /> Discount
					</div>
				</div>
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Avatar size="lg" src="https://i.pravatar.cc/150?img=36" className="shrink-0" />
						<div className="">
							<h6 className="mb-1 text-base font-medium">Kiki</h6>
							<p className="text-sm text-foreground-500">Started a free promotion..</p>
						</div>
					</div>
					<div className="rounded-md border border-orange-500/40 px-2 py-1 text-center text-xs leading-tight text-orange-500">
						<span>70%</span> <br /> Discount
					</div>
				</div>
			</div>
		</div>
	);
}
