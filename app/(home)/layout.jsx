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

export default function FanHomeLayout({ children }) {
	const pathname = usePathname();
	return (
		<div className="flex h-screen flex-col overflow-y-auto lg:flex-row">
			{/* Sidebar */}
			<div className="sticky top-0 hidden h-screen w-[350px] shrink-0 lg:block">
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
								startContent={<Icon name="home" className="h-6 w-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/" ? "bg-neutral-200" : "bg-transparent"}`}>
								<span className="">Home</span>
							</Button>
							<Button
								as={Link}
								href={"/discover"}
								fullWidth
								startContent={<Icon name="compass" className="h-6 w-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/discover" ? "bg-neutral-200" : "bg-transparent"}`}>
								Discover
							</Button>
							<Button
								as={Link}
								href={"/generate-ai-image"}
								fullWidth
								startContent={<Icon name="ai-image" className="h-6 w-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/generate-ai-image" ? "bg-neutral-200" : "bg-transparent"}`}>
								Generate AI Images
							</Button>
							<Button
								as={Link}
								href={"/become-creator"}
								fullWidth
								startContent={<Icon name="doller-earn" className="h-6 w-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/become-creator" ? "bg-neutral-200" : "bg-transparent"}`}>
								Become A Creator
							</Button>
							<Button
								as={Link}
								href={"/notification/transaction"}
								fullWidth
								startContent={<Icon name="bell" className="h-6 w-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/notification" ? "bg-neutral-200" : "bg-transparent"}`}>
								Notifications
							</Button>
							<Button
								as={Link}
								href={"/message"}
								fullWidth
								startContent={<Icon name="message" className="h-6 w-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/message" ? "bg-neutral-200" : "bg-transparent"}`}>
								Message
							</Button>
							<Button
								as={Link}
								href={"/public-images"}
								fullWidth
								startContent={<Icon name="public-access" className="h-6 w-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/public-images" ? "bg-neutral-200" : "bg-transparent"}`}>
								Public Images
							</Button>
						</div>

						<div className="">
							<Button
								as={Link}
								href={"/settings/account"}
								fullWidth
								startContent={<Icon name="settings" className="h-6 w-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold ${pathname === "/settings" ? "bg-neutral-200" : "bg-transparent"}`}>
								Settings
							</Button>
							<Button
								as={Link}
								href={"/login"}
								fullWidth
								startContent={<Icon name="logout" className="h-6 w-6" />}
								className={`h-auto justify-start gap-3 py-3 text-xl font-semibold bg-transparent`}>
								Log out
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="flex h-screen w-full flex-1 flex-col justify-between overflow-y-auto">
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
						<Button isIconOnly radius="full" className="bg-transparent">
							<Icon name="message" className="h-6 w-6" />
						</Button>
						<Button isIconOnly radius="full" className="bg-transparent">
							<Icon name="bell" className="h-6 w-6" />
						</Button>
						<Button
							as={Link}
							href={"/wallet-and-payments"}
							isIconOnly
							radius="full"
							className="bg-transparent">
							<Icon name="wallet" className="h-6 w-6" />
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
									href="/profile"
									startContent={<Icon name="user" className="h-4 w-4" />}>
									Profile
								</DropdownItem>

								<DropdownItem
									key="likes"
									href="/my-likes"
									startContent={<Icon name="heart-alt" className="h-4 w-4" />}>
									My Likes / Purchased
								</DropdownItem>
								<DropdownItem
									key="creator"
									href="/become-creator"
									startContent={<Icon name="doller-earn" className="h-4 w-4" />}>
									Become a creator
								</DropdownItem>
								<DropdownItem
									key="ai-image"
									href="/generate-ai-image"
									startContent={<Icon name="ai-image" className="h-4 w-4" />}>
									Generate AI Images
								</DropdownItem>
								<DropdownItem
									key="public-images"
									href="/public-images"
									startContent={<Icon name="public-access" className="h-4 w-4" />}>
									Public Images
								</DropdownItem>
								<DropdownItem
									key="promotions"
									href="/promotions"
									startContent={<Icon name="hand-mike" className="h-4 w-4" />}>
									Promotions
								</DropdownItem>
								<DropdownItem
									key="wallet"
									href="/wallet-and-payments"
									startContent={<Icon name="wallet" className="h-4 w-4" />}>
									Wallet & Payment
								</DropdownItem>
								<DropdownItem
									key="settings"
									href="/settings/account"
									startContent={<Icon name="settings" className="h-4 w-4" />}>
									Settings
								</DropdownItem>
								<DropdownItem
									key="logout"
									href="/login"
									startContent={<Icon name="logout" className="h-4 w-4" />}>
									Log out
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>

				<div className="sticky top-0 z-50 flex items-center gap-5 bg-white px-5 py-3 lg:hidden">
					<Button isIconOnly className="bg-neutral-100">
						<Icon name="arrow-left" className="h-6 w-6" />
					</Button>
					<h4 className="text-lg font-semibold">Home</h4>
				</div>

				{/* content */}
				<div className="flex-1 p-5 lg:p-6">{children}</div>

				{/* mobile appbar */}
				<div className="sticky bottom-0 z-50 px-3 py-2 lg:hidden">
					<div className="flex items-center justify-between gap-2 rounded-xl bg-white px-5 py-2.5 shadow-[-2px_-2px_50px_0px_rgba(0,0,0,0.1)]">
						<Button as={Link} href="/" isIconOnly className="bg-neutral-100">
							<Icon name="home" className="h-6 w-6" />
						</Button>
						<Button as={Link} href="/notification/transaction" isIconOnly className="bg-neutral-100">
							<Icon name="bell" className="h-6 w-6" />
						</Button>
						<Button as={Link} href="/discover/search" isIconOnly className="bg-neutral-100">
							<Icon name="search" className="h-6 w-6" />
						</Button>
						<Button as={Link} href="/message" isIconOnly className="bg-neutral-100">
							<Icon name="message" className="h-6 w-6" />
						</Button>

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
									href="/become-creator"
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
						</Dropdown>
					</div>
				</div>
			</div>
		</div>
	);
}
