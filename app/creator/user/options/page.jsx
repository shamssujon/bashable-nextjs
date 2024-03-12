"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function SettingsOptions() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<Listbox
				classNames={{ list: "divide-y-1" }}
				itemClasses={{ base: "rounded-none py-3 gap-4", title: "text-xl font-medium " }}>
				<ListboxItem
					key="profile"
					href="/creator/profile"
					startContent={<Icon name="user" className="size-6" />}>
					Profile
				</ListboxItem>

				<ListboxItem key="vault" href="/creator/vault" startContent={<Icon name="vault" className="size-6" />}>
					Vault
				</ListboxItem>
				<ListboxItem key="queue" href="/creator/queue" startContent={<Icon name="queue" className="size-6" />}>
					Queue
				</ListboxItem>
				<ListboxItem
					key="insights"
					href="/creator/insights"
					startContent={<Icon name="statistics" className="size-6" />}>
					Insights
				</ListboxItem>
				<ListboxItem
					key="lists"
					href="/creator/list"
					startContent={<Icon name="document-list" className="size-6" />}>
					Lists
				</ListboxItem>
				<ListboxItem
					key="settings"
					href="/creator/settings/options"
					startContent={<Icon name="settings" className="size-6" />}>
					Settings
				</ListboxItem>
				<ListboxItem
					key="wallet-and-payment"
					href="/creator/wallet-and-payment"
					startContent={<Icon name="wallet" className="size-6" />}>
					Wallet & Payment Methods
				</ListboxItem>
				<ListboxItem
					key="earning"
					href="/creator/earning"
					startContent={<Icon name="earning" className="size-6" />}>
					Earning & Payments
				</ListboxItem>
				<ListboxItem
					key="refer"
					href="/creator/refer"
					startContent={<Icon name="giftbox" className="size-6" />}>
					Refer Creators & Earn
				</ListboxItem>
				<ListboxItem
					key="whats-new"
					href="/creator/whats-new"
					startContent={<Icon name="star" className="size-6" />}>
					What&apos;s New?
				</ListboxItem>
				<ListboxItem
					key="help"
					href="/creator/help"
					startContent={<Icon name="question" className="size-6" />}>
					Help and Support
				</ListboxItem>
				<ListboxItem key="logout" href="/login" startContent={<Icon name="logout" className="size-6" />}>
					Logout
				</ListboxItem>
			</Listbox>
		</div>
	);
}
