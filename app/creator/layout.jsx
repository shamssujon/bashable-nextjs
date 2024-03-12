"use client";

import { Icon } from "@/app/Components/Icons/Icons";
import logoIconBlack from "@/public/logo-icon-black.png";
import logoTextBlack from "@/public/logo-text-black.png";
import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
	Link,
	User,
} from "@nextui-org/react";
import Image from "next/image";

import { usePathname } from "next/navigation";

export default function CreatorLayout({ children }) {
	const pathname = usePathname();
	return (
		<div className="flex h-full flex-col overflow-y-auto lg:flex-row">
			{/* Sidebar */}
			<div className="sticky top-0 hidden h-full w-[350px] shrink-0 lg:block">
				<div className="flex h-full flex-col gap-10 bg-neutral-100">
					<div className="flex h-[72px] flex-col justify-center border-b px-6 py-4">
						<Link href={"/"} className="flex w-full items-center gap-4 ">
							<Image src={logoIconBlack} alt="" className="h-6 w-auto" />
							<Image src={logoTextBlack} alt="" className="h-5 w-auto" />
						</Link>
					</div>

					<div className="flex flex-1 flex-col justify-between overflow-y-auto px-6 pb-6">
						<div className="">
							<Button
								as={Link}
								href={"/"}
								fullWidth
								startContent={<Icon name="home" className="size-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/" ? "bg-neutral-200" : "bg-transparent"}`}>
								<span className="">Home</span>
							</Button>
							<Button
								as={Link}
								href={"/discover"}
								fullWidth
								startContent={<Icon name="compass" className="size-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/discover" ? "bg-neutral-200" : "bg-transparent"}`}>
								Discover
							</Button>
							<Button
								as={Link}
								href={"/creator/notifications"}
								fullWidth
								startContent={<Icon name="bell" className="size-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/creator/notifications" ? "bg-neutral-200" : "bg-transparent"}`}>
								Notifications
							</Button>
							<Button
								as={Link}
								href={"/creator/message"}
								fullWidth
								startContent={<Icon name="message" className="size-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/creator/message" ? "bg-neutral-200" : "bg-transparent"}`}>
								Message
							</Button>
							<Button
								as={Link}
								href={"/creator/insights"}
								fullWidth
								startContent={<Icon name="statistics" className="size-6 p-0.5" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/become-creator" ? "bg-neutral-200" : "bg-transparent"}`}>
								Insights
							</Button>
							<Button
								as={Link}
								href={"/generate-ai-image"}
								fullWidth
								startContent={<Icon name="ai-image" className="size-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/generate-ai-image" ? "bg-neutral-200" : "bg-transparent"}`}>
								Generate AI Images
							</Button>
							<Button
								as={Link}
								href={"/public-images"}
								fullWidth
								startContent={<Icon name="public-access" className="size-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/public-images" ? "bg-neutral-200" : "bg-transparent"}`}>
								Public Images
							</Button>
						</div>

						<div className="">
							<Button
								as={Link}
								href={"/creator/settings"}
								fullWidth
								startContent={<Icon name="settings" className="size-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/settings" ? "bg-neutral-200" : "bg-transparent"}`}>
								Settings
							</Button>
							<Button
								as={Link}
								href={"/login"}
								fullWidth
								startContent={<Icon name="logout" className="size-6" />}
								className={`h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold`}>
								Log out
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="flex w-full flex-1 flex-col justify-between overflow-y-auto">
				{/* header */}
				<div className="sticky top-0 z-20 hidden h-[72px] shrink-0 items-center justify-between gap-4 border-b bg-white px-6 lg:flex">
					<div className="mx-auto max-w-xl flex-1">
						<Input
							size=""
							type="text"
							placeholder="Search"
							radius="full"
							classNames={{
								input: "text-base",
								inputWrapper: "px-6 h-12",
							}}
						/>
					</div>

					<div className="flex w-[350px] items-center justify-end gap-2">
						<Button as={Link} href={"/creator/message"} isIconOnly radius="full" className="bg-transparent">
							<Icon name="message" className="size-6" />
						</Button>
						<Button
							as={Link}
							href={"/creator/notifications"}
							isIconOnly
							radius="full"
							className="bg-transparent">
							<Icon name="bell" className="size-6" />
						</Button>
						<Button
							as={Link}
							href={"/creator/wallet-and-payments"}
							isIconOnly
							radius="full"
							className="bg-transparent">
							<Icon name="wallet" className="size-6" />
						</Button>

						<Dropdown showArrow placement="top-end">
							<DropdownTrigger>
								<Button isIconOnly radius="full" className="ml-2 bg-transparent">
									<Avatar src="https://i.pravatar.cc/150?img=36" />
								</Button>
							</DropdownTrigger>

							<DropdownMenu aria-label="Profile Actions" variant="flat">
								<DropdownItem key="avatar">
									<User
										name="John Rogers"
										avatarProps={{
											src: "https://i.pravatar.cc/150?img=36",
											size: "sm",
										}}
										classNames={{
											name: "text-base font-semibold",
										}}
									/>
								</DropdownItem>

								<DropdownItem
									key="profile"
									href="/creator/profile"
									startContent={<Icon name="user" className="h-4 w-4" />}>
									Profile
								</DropdownItem>

								<DropdownItem
									key="vault"
									href="/creator/vault"
									startContent={<Icon name="vault" className="h-4 w-4" />}>
									Vault
								</DropdownItem>
								<DropdownItem
									key="queue"
									href="/creator/queue"
									startContent={<Icon name="queue" className="h-4 w-4" />}>
									Queue
								</DropdownItem>
								<DropdownItem
									key="insights"
									href="/creator/insights"
									startContent={<Icon name="statistics" className="h-4 w-4" />}>
									Insights
								</DropdownItem>
								<DropdownItem
									key="lists"
									href="/creator/list"
									startContent={<Icon name="document-list" className="h-4 w-4" />}>
									Lists
								</DropdownItem>
								<DropdownItem
									key="settings"
									href="/creator/settings"
									startContent={<Icon name="settings" className="h-4 w-4" />}>
									Settings
								</DropdownItem>
								<DropdownItem
									key="wallet-and-payment"
									href="/creator/wallet-and-payment"
									startContent={<Icon name="wallet" className="h-4 w-4" />}>
									Wallet & Payment Methods
								</DropdownItem>
								<DropdownItem
									key="earning"
									href="/creator/earning"
									startContent={<Icon name="earning" className="h-4 w-4" />}>
									Earning & Payments
								</DropdownItem>
								<DropdownItem
									key="refer"
									href="/creator/refer"
									startContent={<Icon name="giftbox" className="h-4 w-4" />}>
									Refer Creators & Earn
								</DropdownItem>
								<DropdownItem
									key="whats-new"
									href="/creator/whats-new"
									startContent={<Icon name="star" className="h-4 w-4" />}>
									What&apos;s New?
								</DropdownItem>
								<DropdownItem
									key="help"
									href="/creator/help"
									startContent={<Icon name="question" className="h-4 w-4" />}>
									Help and Support
								</DropdownItem>
								<DropdownItem
									key="logout"
									href="/login"
									startContent={<Icon name="logout" className="h-4 w-4" />}>
									Logout
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>

				<div className="sticky top-0 z-50 flex items-center gap-5 bg-white px-5 py-3 lg:hidden">
					<Button isIconOnly className="bg-neutral-100">
						<Icon name="arrow-left" className="size-6" />
					</Button>
					<h4 className="text-lg font-semibold">Home</h4>
				</div>

				{/* content */}
				<div className="flex-1 p-5 lg:p-6">{children}</div>

				{/* mobile appbar */}
				<div className="sticky bottom-0 z-50 px-3 py-2 lg:hidden">
					<div className="flex items-center justify-between gap-2 rounded-xl bg-white px-5 py-2.5 shadow-[-2px_-2px_50px_0px_rgba(0,0,0,0.1)]">
						<Button as={Link} href="/creator" isIconOnly className="bg-neutral-100">
							<Icon name="home" className="size-6" />
						</Button>
						<Button as={Link} href="/creator/notifications" isIconOnly className="bg-neutral-100">
							<Icon name="bell" className="size-6" />
						</Button>
						<Button as={Link} href="/creator/post/create" isIconOnly className="bg-neutral-100">
							<Icon name="plus" className="size-5" />
						</Button>
						<Button as={Link} href="/creator/message" isIconOnly className="bg-neutral-100">
							<Icon name="message" className="size-6" />
						</Button>
						<Button
							as={Link}
							href="/creator/user/options"
							isIconOnly
							radius="lg"
							className="ml-2 bg-transparent">
							<Avatar radius="lg" src="https://i.pravatar.cc/150?img=36" />
						</Button>

						{/* 
						<Dropdown showArrow placement="bottom-end">
							<DropdownTrigger>
								<Button isIconOnly radius="lg" className="ml-2 bg-transparent">
									<Avatar radius="lg" src="https://i.pravatar.cc/150?img=36" />
								</Button>
							</DropdownTrigger>

							<DropdownMenu
								aria-label="Profile Actions"
								variant="flat"
								itemClasses={{ title: "text-base" }}>
								<DropdownItem key="avatar">
									<User
										name="John Rogers"
										avatarProps={{
											src: "https://i.pravatar.cc/150?img=36",
											size: "sm",
										}}
										classNames={{
											name: "text-base font-semibold",
										}}
									/>
								</DropdownItem>

								<DropdownItem
									key="profile"
									href="/profile"
									startContent={<Icon name="user" className="h-5 w-5" />}>
									Profile
								</DropdownItem>

								<DropdownItem
									key="likes"
									href="/my-likes"
									startContent={<Icon name="heart-alt" className="h-5 w-5" />}>
									My Likes / Purchased
								</DropdownItem>
								<DropdownItem
									key="creator"
									href="/become-creator/options"
									startContent={<Icon name="doller-earn" className="h-5 w-5" />}>
									Become a creator
								</DropdownItem>
								<DropdownItem
									key="ai-image"
									href="/generate-ai-image"
									startContent={<Icon name="ai-image" className="h-5 w-5" />}>
									Generate AI Images
								</DropdownItem>
								<DropdownItem
									key="public-images"
									href="/public-images"
									startContent={<Icon name="public-access" className="h-5 w-5" />}>
									Public Images
								</DropdownItem>
								<DropdownItem
									key="promotions"
									href="/promotions"
									startContent={<Icon name="hand-mike" className="h-5 w-5" />}>
									Promotions
								</DropdownItem>
								<DropdownItem
									key="wallet"
									href="/wallet-and-payments"
									startContent={<Icon name="wallet" className="h-5 w-5" />}>
									Wallet & Payment
								</DropdownItem>
								<DropdownItem
									key="settings"
									href="/settings/options"
									startContent={<Icon name="settings" className="h-5 w-5" />}>
									Settings
								</DropdownItem>
								<DropdownItem
									key="logout"
									href="/login"
									startContent={<Icon name="logout" className="h-5 w-5" />}>
									Log out
								</DropdownItem>
							</DropdownMenu>
						</Dropdown> */}
					</div>
				</div>
			</div>
		</div>
	);
}
