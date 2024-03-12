"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function CreatorSettingsOptions() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<Listbox
				classNames={{ list: "divide-y-1" }}
				itemClasses={{ base: "rounded-none py-3 gap-4", title: "text-xl font-medium" }}>
				<ListboxItem
					key="1"
					href="/creator/settings/account"
					startContent={<Icon name="user" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Account
				</ListboxItem>
				<ListboxItem
					key="2"
					href="/creator/settings/creator-settings"
					startContent={<Icon name="settings-alt" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Creator settings
				</ListboxItem>
				<ListboxItem
					key="3"
					href=""
					startContent={<Icon name="bank" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Payout settings
				</ListboxItem>
				<ListboxItem
					key="4"
					href="/creator/settings/payments"
					startContent={<Icon name="payment" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Payments and subscriptions
				</ListboxItem>
				<ListboxItem
					key="5"
					href=""
					startContent={<Icon name="bell" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Notifications
				</ListboxItem>
				<ListboxItem
					key="6"
					href=""
					startContent={<Icon name="privacy" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Privacy and safety
				</ListboxItem>
				<ListboxItem
					key="7"
					href=""
					startContent={<Icon name="question" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Help And Support
				</ListboxItem>
			</Listbox>
		</div>
	);
}
