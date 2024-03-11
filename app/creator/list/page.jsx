"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Button, Listbox, ListboxItem } from "@nextui-org/react";

export default function CreatorList() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<div className="flex items-center justify-between gap-4">
				<h4 className="hidden text-2xl font-semibold lg:block">List</h4>

				<Button
					size="lg"
					startContent={<Icon name="plus-circle" className="size-5 text-white" />}
					className="w-full bg-black font-semibold text-white lg:w-auto">
					New Custom List
				</Button>
			</div>

			<div className="mt-6 flex items-center gap-3">
				<Button size="lg" className="flex-1 bg-orange-500 font-semibold text-white">
					Smart
				</Button>
				<Button size="lg" className="flex-1 font-semibold">
					Custom
				</Button>
			</div>

			<div className="mt-4">
				<Listbox
					aria-label="list"
					classNames={{ list: "divide-y-1 gap-0" }}
					itemClasses={{
						base: "rounded-none py-5 gap-4",
						title: "text-base font-semibold",
						description: "text-sm",
					}}>
					<ListboxItem
						key="1"
						description="0 members"
						endContent={
							<div className="grid size-12 shrink-0 place-content-center rounded-xl border border-neutral-200/50 bg-neutral-100">
								<Icon name="user-plus" className="size-6" />
							</div>
						}>
						Subscribers
					</ListboxItem>
					<ListboxItem
						key="2"
						description="0 members"
						endContent={
							<div className="grid size-12 shrink-0 place-content-center rounded-xl border border-neutral-200/50 bg-neutral-100">
								<Icon name="user-plus" className="size-6" />
							</div>
						}>
						Followers
					</ListboxItem>
					<ListboxItem
						key="3"
						description="0 members"
						endContent={
							<div className="grid size-12 shrink-0 place-content-center rounded-xl border border-neutral-200/50 bg-neutral-100">
								<Icon name="user-plus" className="size-6" />
							</div>
						}>
						Non-renewing
					</ListboxItem>
					<ListboxItem
						key="4"
						description="0 members"
						endContent={
							<div className="grid size-12 shrink-0 place-content-center rounded-xl border border-neutral-200/50 bg-neutral-100">
								<Icon name="user-plus" className="size-6" />
							</div>
						}>
						Auto-renewing
					</ListboxItem>
					<ListboxItem
						key="5"
						description="0 members"
						endContent={
							<div className="grid size-12 shrink-0 place-content-center rounded-xl border border-neutral-200/50 bg-neutral-100">
								<Icon name="user-plus" className="size-6" />
							</div>
						}>
						Expired subscribers
					</ListboxItem>
					<ListboxItem
						key="6"
						description="0 members"
						endContent={
							<div className="grid size-12 shrink-0 place-content-center rounded-xl border border-neutral-200/50 bg-neutral-100">
								<Icon name="user-plus" className="size-6" />
							</div>
						}>
						Free trial subscribers
					</ListboxItem>
				</Listbox>
			</div>
		</div>
	);
}
