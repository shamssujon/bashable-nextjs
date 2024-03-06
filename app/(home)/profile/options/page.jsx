"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function ProfileOptions() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<Listbox
				classNames={{ list: "divide-y-1" }}
				itemClasses={{ title: "text-xl font-medium ", base: "rounded-none py-3 gap-4" }}>
				<ListboxItem
					key="home"
					href="/public-profile"
					startContent={<Icon name="user" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					View public profile
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/following"
					startContent={<Icon name="user-check" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Following
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/followers"
					startContent={<Icon name="user-plus-alt" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Followers
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/transaction-history"
					startContent={<Icon name="history" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Transaction History
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/edit-profile"
					startContent={<Icon name="user-edit" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Edit profile
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/quest"
					startContent={<Icon name="quest" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Quest
				</ListboxItem>
			</Listbox>
		</div>
	);
}
