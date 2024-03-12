"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function CreatorSettingsPaymentOptions() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<p className="mb-4 text-sm">
				Add or remove payment card manage your subscriptions or see the history of your transactions.
			</p>

			<Listbox
				classNames={{ list: "divide-y-1" }}
				itemClasses={{ base: "rounded-none py-3 gap-4", title: "text-xl font-medium" }}>
				<ListboxItem
					key="1"
					href=""
					startContent={<Icon name="wallet" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Wallet & Payment Methods
				</ListboxItem>
				<ListboxItem
					key="2"
					href=""
					startContent={<Icon name="sliders-horizontal" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Manage my subscriptions
				</ListboxItem>
				<ListboxItem
					key="3"
					href=""
					startContent={<Icon name="history-alt" className="size-6" />}
					endContent={<Icon name="arrow-right" className="size-6" />}>
					Transaction history
				</ListboxItem>
			</Listbox>
		</div>
	);
}
