"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem, Progress } from "@nextui-org/react";
import { useState } from "react";

export default function SettingsLayout({ children }) {
	const [value, setValue] = useState(1);
	const [totalValue, setTotalValue] = useState(10);

	return (
		<div className="flex h-full gap-6">
			<div className="hidden border-r pr-5 lg:block">
				<Listbox
					classNames={{ list: "divide-y-1" }}
					itemClasses={{ base: "rounded-none py-2 gap-4", title: "text-base font-medium " }}>
					<ListboxItem
						key="home"
						href="/become-creator/country"
						startContent={<Icon name="globe" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5" />}
						className="text-success-500">
						Country
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/verify"
						startContent={<Icon name="verify" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5" />}
						className="text-success-500">
						Verify Identity
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/content"
						startContent={<Icon name="content" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5 opacity-0" />}>
						Content
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/gender"
						startContent={<Icon name="gender" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5 opacity-0" />}>
						Gender
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/profile"
						startContent={<Icon name="user-circle" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5 opacity-0" />}>
						Profile picture & Handle
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/banner"
						startContent={<Icon name="image" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5 opacity-0" />}>
						Banner picture & Bio
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/subscription"
						startContent={<Icon name="price" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5 opacity-0" />}>
						Subscription price
					</ListboxItem>
				</Listbox>
			</div>

			<div className="mx-auto flex w-full max-w-screen-sm flex-1 flex-col">
				<div className="mb-6 flex items-center justify-center gap-2 lg:mb-10">
					<Progress
						aria-label="Downloading..."
						size="md"
						value={value}
						color="success"
						showValueLabel={true}
						formatOptions={{ style: "decimal" }}
						className="max-w-md !flex-row items-center"
						classNames={{ track: "flex-1" }}
					/>
					<span>{totalValue}</span>
				</div>

				{children}
			</div>
		</div>
	);
}
