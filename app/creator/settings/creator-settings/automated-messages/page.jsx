"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function AutomatedMessages() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<p className="mb-6 text-sm text-foreground-500">
				Set up and manage messages that are automatically sent to users upon specific events.
			</p>

			<Listbox
				classNames={{ list: "divide-y-1 gap-0" }}
				itemClasses={{ base: "rounded-none py-4 gap-4", title: "text-lg font-semibold" }}>
				<ListboxItem
					key="1"
					href=""
					startContent={<Icon name="plus-circle" className="size-6" />}
					endContent={
						<div className="itemws-center flex gap-0">
							<span className="font-semibold uppercase text-orange-600">Off</span>
							<Icon name="arrow-right" className="size-6" />
						</div>
					}>
					New Subscriber
				</ListboxItem>
				<ListboxItem
					key="2"
					href=""
					startContent={<Icon name="user-plus-alt" className="size-6" />}
					endContent={
						<div className="itemws-center flex gap-0">
							<span className="font-semibold uppercase text-orange-600">Off</span>
							<Icon name="arrow-right" className="size-6" />
						</div>
					}>
					New Follower
				</ListboxItem>
				<ListboxItem
					key="3"
					href=""
					startContent={<Icon name="x-circle" className="size-6" />}
					endContent={
						<div className="itemws-center flex gap-0">
							<span className="font-semibold uppercase text-orange-600">Off</span>
							<Icon name="arrow-right" className="size-6" />
						</div>
					}>
					Subscriber canceled
				</ListboxItem>
				<ListboxItem
					key="4"
					href=""
					startContent={<Icon name="arrow-left-circle" className="size-6" />}
					endContent={
						<div className="itemws-center flex gap-0">
							<span className="font-semibold uppercase text-orange-600">Off</span>
							<Icon name="arrow-right" className="size-6" />
						</div>
					}>
					Re-subscribed
				</ListboxItem>
				<ListboxItem
					key="5"
					href=""
					startContent={<Icon name="renewal" className="size-6" />}
					endContent={
						<div className="itemws-center flex gap-0">
							<span className="font-semibold uppercase text-orange-600">Off</span>
							<Icon name="arrow-right" className="size-6" />
						</div>
					}>
					Subscription renewed
				</ListboxItem>
				<ListboxItem
					key="6"
					href=""
					startContent={<Icon name="basket" className="size-6" />}
					endContent={
						<div className="itemws-center flex gap-0">
							<span className="font-semibold uppercase text-orange-600">Off</span>
							<Icon name="arrow-right" className="size-6" />
						</div>
					}>
					New Purchase
				</ListboxItem>
			</Listbox>
		</div>
	);
}
