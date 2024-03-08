"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Listbox, ListboxItem, Progress } from "@nextui-org/react";
import { usePathname } from "next/navigation";
export default function SettingsLayout({ children }) {
	const pathname = usePathname();
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
						className={`text-orange-500 ${pathname === "/become-creator/country" ? "bg-neutral-200" : "bg-transparent"}`}>
						Country
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/verify"
						startContent={<Icon name="verify" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5" />}
						className={`text-orange-500 ${pathname === "/become-creator/verify" ? "bg-neutral-200" : "bg-transparent"}`}>
						Verify Identity
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/content"
						startContent={<Icon name="content" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5 opacity-0" />}
						className={`${pathname === "/become-creator/content" ? "bg-neutral-200" : "bg-transparent"}`}>
						Content
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/gender"
						startContent={<Icon name="gender" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5 opacity-0" />}
						className={`${pathname === "/become-creator/gender" ? "bg-neutral-200" : "bg-transparent"}`}>
						Gender
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/profile"
						startContent={<Icon name="user-circle" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5 opacity-0" />}
						className={`${pathname === "/become-creator/profile" ? "bg-neutral-200" : "bg-transparent"}`}>
						Profile picture & Handle
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/banner"
						startContent={<Icon name="image" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5 opacity-0" />}
						className={`${pathname === "/become-creator/banner" ? "bg-neutral-200" : "bg-transparent"}`}>
						Banner picture & Bio
					</ListboxItem>
					<ListboxItem
						key="home"
						href="/become-creator/subscription"
						startContent={<Icon name="price" className="size-5" />}
						endContent={<Icon name="check-circle" className="size-5 opacity-0" />}
						className={`${pathname === "/become-creator/subscription" ? "bg-neutral-200" : "bg-transparent"}`}>
						Subscription price
					</ListboxItem>
				</Listbox>
			</div>

			<div className="mx-auto flex w-full max-w-screen-sm flex-1 flex-col">
				<div
					className={`mb-6 items-center justify-center gap-2 lg:mb-10 ${pathname === "/become-creator/options" ? "hidden" : "flex"}`}>
					<span className="font-semibold">01</span>
					<Progress
						aria-label="Downloading..."
						size="sm"
						value={40}
						color="default"
						showValueLabel={false}
						formatOptions={{ style: "decimal" }}
						className="max-w-md !flex-row items-center"
						classNames={{ track: "flex-1", indicator: "bg-orange-500" }}
					/>
					<span className="font-semibold">10</span>
				</div>

				{children}
			</div>
		</div>
	);
}
