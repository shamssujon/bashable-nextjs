"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function Settings() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<Listbox
				classNames={{ list: "divide-y-1" }}
				itemClasses={{ title: "text-xl font-medium ", base: "rounded-none py-3 gap-4" }}>
				<ListboxItem
					key="home"
					href="/home/public-profile"
					startContent={<Icon name="user" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Account
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/home/following"
					startContent={<Icon name="payment" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Payments and subscriptions
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/home/followers"
					startContent={<Icon name="privacy" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Privacy and safety
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/home/transaction-history"
					startContent={<Icon name="question" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Help And Support
				</ListboxItem>
			</Listbox>
		</div>
	);
}
