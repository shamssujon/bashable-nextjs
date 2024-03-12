"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function CreatorSettingsOptions() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<p className="mb-4 text-sm">
				See information about your subscriptions, edit profile preferences set automated messages or import your
				posts from onlyfans.
			</p>

			<Listbox
				classNames={{ list: "divide-y-1" }}
				itemClasses={{ base: "rounded-none py-3 gap-4", title: "text-xl font-medium" }}>
				<ListboxItem
					key="1"
					href=""
					startContent={<Icon name="price" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Subscription
				</ListboxItem>
				<ListboxItem
					key="2"
					href="/creator/settings/creator-settings/creator-profile"
					startContent={<Icon name="user" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Creator profile
				</ListboxItem>
				<ListboxItem
					key="3"
					href="/creator/settings/creator-settings/my-ai"
					startContent={<Icon name="ai" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					My AI
				</ListboxItem>
				<ListboxItem
					key="4"
					href=""
					startContent={<Icon name="message-alt" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Automated messages
				</ListboxItem>
				<ListboxItem
					key="5"
					href=""
					startContent={<Icon name="question" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Tutorials
				</ListboxItem>
			</Listbox>
		</div>
	);
}
