"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function BecomeCreator() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<Listbox
				classNames={{ list: "divide-y-1" }}
				itemClasses={{ title: "text-xl font-medium ", base: "rounded-none py-3 gap-4" }}>
				<ListboxItem
					key="home"
					href="/become-creator/country"
					startContent={<Icon name="globe" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Country
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/become-creator/verify"
					startContent={<Icon name="verify" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Verify Identity
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/become-creator/content"
					startContent={<Icon name="content" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Content
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/become-creator/gender"
					startContent={<Icon name="gender" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Gender
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/become-creator/profile"
					startContent={<Icon name="user-circle" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Profile picture & Handle
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/become-creator/banner"
					startContent={<Icon name="image" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Banner picture & Bio
				</ListboxItem>
				<ListboxItem
					key="home"
					href="/become-creator/subscription"
					startContent={<Icon name="price" className="h-6 w-6" />}
					endContent={<Icon name="arrow-right" className="h-6 w-6" />}>
					Subscription price
				</ListboxItem>
			</Listbox>
		</div>
	);
}
