"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function CreatorSettingsAccountOptions() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<p className="text-sm mb-4">
				See information about your account, change password, learn about your account deactivation options.
			</p>

			<Listbox
				classNames={{ list: "divide-y-1" }}
				itemClasses={{ base: "rounded-none py-3 gap-4", title: "text-xl font-medium" }}>
				<ListboxItem
					key="1"
					href="/settings/account"
					startContent={<Icon name="user" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Account Info
				</ListboxItem>
				<ListboxItem
					key="2"
					href="/creator/settings/password-and-security"
					startContent={<Icon name="folder-lock" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Password and security
				</ListboxItem>
				<ListboxItem
					key="3"
					href="/settings/account"
					startContent={<Icon name="trash" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Delete my account
				</ListboxItem>
			</Listbox>
		</div>
	);
}
