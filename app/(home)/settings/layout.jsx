"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";

export default function SettingsLayout({ children }) {
	return (
		<div className="flex h-full gap-6">
			<div className="hidden border-r pr-5 lg:block">
				<Listbox itemClasses={{ base: "rounded-none py-2 gap-4", title: "text-base font-medium " }}>
					<ListboxSection title="Account" showDivider>
						<ListboxItem
							key="account"
							href="/settings/account"
							startContent={<Icon name="swap" className="size-5" />}>
							Change Password
						</ListboxItem>
						<ListboxItem
							key="account"
							href="/profile/edit"
							startContent={<Icon name="user-edit" className="size-5" />}>
							Edit Profile
						</ListboxItem>
					</ListboxSection>

					<ListboxSection title="Payments and subscriptions" showDivider>
						<ListboxItem
							key="payments"
							href="/settings/payments"
							startContent={<Icon name="payment" className="size-5" />}>
							Payments and subscriptions
						</ListboxItem>
					</ListboxSection>

					<ListboxSection title="Privacy and safety" showDivider>
						<ListboxItem
							key="privacy"
							href="/settings/rules"
							startContent={<Icon name="document" className="size-5" />}>
							Bashable rules
						</ListboxItem>
						<ListboxItem
							key="privacy"
							href="/settings/announcements"
							startContent={<Icon name="hand-mike-alt" className="size-5" />}>
							Announcements
						</ListboxItem>
						<ListboxItem
							key="privacy"
							href="/settings/blocked-accounts"
							startContent={<Icon name="user-block" className="size-5" />}>
							Blocked accounts
						</ListboxItem>
						<ListboxItem
							key="privacy"
							href="/settings/report"
							startContent={<Icon name="flag" className="size-5" />}>
							Report
						</ListboxItem>
					</ListboxSection>

					<ListboxItem
						key="help"
						href="/settings/help-and-support"
						startContent={<Icon name="question" className="size-5" />}>
						Help And Support
					</ListboxItem>
				</Listbox>
			</div>

			<div className="w-full flex-1">{children}</div>
		</div>
	);
}
