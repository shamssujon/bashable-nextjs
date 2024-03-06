"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function PrivacyOptions() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<Listbox
				classNames={{ list: "divide-y-1" }}
				itemClasses={{ base: "rounded-none py-3 gap-4", title: "text-xl font-medium " }}>
				<ListboxItem
					key="account"
					href="/settings/rules"
					startContent={<Icon name="document" className="h-6 w-6" />}>
					Bashable rules
				</ListboxItem>
				<ListboxItem
					key="payments"
					href="/settings/announcements"
					startContent={<Icon name="hand-mike-alt" className="h-6 w-6" />}>
					Announcements
				</ListboxItem>
				<ListboxItem
					key="privacy"
					href="/settings/blocked-accounts"
					startContent={<Icon name="user-block" className="h-6 w-6" />}>
					Blocked accounts
				</ListboxItem>
				<ListboxItem
					key="help"
					href="/settings/report"
					startContent={<Icon name="flag" className="h-6 w-6" />}>
					Report
				</ListboxItem>
			</Listbox>
		</div>
	);
}
