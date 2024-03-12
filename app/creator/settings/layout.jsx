"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";

export default function CreatorSettingsLayout({ children }) {
	return (
		<div className="flex h-full gap-6">
			<div className="hidden border-r pr-5 lg:block">
				<Listbox itemClasses={{ base: "rounded-none py-2 gap-4", title: "text-base font-medium " }}>
					<ListboxSection title="Account" showDivider>
						<ListboxItem
							key="account"
							href=""
							startContent={<Icon name="user" className="size-5" />}>
							Account Info
						</ListboxItem>
						<ListboxItem
							key="account"
							href=""
							startContent={<Icon name="vault" className="size-5" />}>
							Password and security
						</ListboxItem>
						<ListboxItem
							key="account"
							href=""
							startContent={<Icon name="trash" className="size-5" />}>
							Delete my account
						</ListboxItem>
					</ListboxSection>

					<ListboxSection title="Creator settings" showDivider>
						<ListboxItem
							key="payments"
							href=""
							startContent={<Icon name="price" className="size-5" />}>
							Subscription
						</ListboxItem>
						<ListboxItem
							key="payments"
							href=""
							startContent={<Icon name="user" className="size-5" />}>
							Creator profile
						</ListboxItem>
						<ListboxItem
							key="payments"
							href=""
							startContent={<Icon name="ai" className="size-5" />}>
							My AI
						</ListboxItem>
						<ListboxItem
							key="payments"
							href=""
							startContent={<Icon name="message-alt" className="size-5" />}>
							Automated messages
						</ListboxItem>
						<ListboxItem
							key="payments"
							href=""
							startContent={<Icon name="question" className="size-5" />}>
							Tutorials
						</ListboxItem>
					</ListboxSection>

					<ListboxSection title="Payments and subscriptions" showDivider>
						<ListboxItem
							key="privacy"
							href=""
							startContent={<Icon name="wallet" className="size-5" />}>
							Wallet & Payment Methods
						</ListboxItem>
						<ListboxItem
							key="privacy"
							href=""
							startContent={<Icon name="sliders-horizontal" className="size-5" />}>
							Manage my subscriptions
						</ListboxItem>
						<ListboxItem
							key="privacy"
							href=""
							startContent={<Icon name="history-alt" className="size-5" />}>
							Transaction history
						</ListboxItem>
					</ListboxSection>

					<ListboxItem
						key="help"
						href=""
						startContent={<Icon name="bank" className="size-5" />}>
						Payout setting
					</ListboxItem>

					<ListboxItem
						key="help"
						href=""
						startContent={<Icon name="bell" className="size-5" />}>
						Notifications
					</ListboxItem>

					<ListboxItem
						key="help"
						href=""
						startContent={<Icon name="privacy" className="size-5" />}>
						Privacy and safety
					</ListboxItem>

					<ListboxItem
						key=""
						href=""
						startContent={<Icon name="question" className="size-5" />}>
						Help And Support
					</ListboxItem>
				</Listbox>
			</div>

			<div className="w-full flex-1">{children}</div>
		</div>
	);
}
