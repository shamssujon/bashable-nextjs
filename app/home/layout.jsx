import { Icon } from "@/app/Components/Icons/Icons";
import logoIconBlack from "@/public/logo-icon-black.png";
import logoTextBlack from "@/public/logo-text-black.png";
import { Avatar, Button, Input, Link } from "@nextui-org/react";
import Image from "next/image";

export default function FanHomeLayout({ children }) {
	return (
		<div className="flex h-screen flex-col overflow-y-auto lg:flex-row">
			{/* Sidebar */}
			<div className="sticky top-0 hidden h-screen w-[350px] shrink-0 lg:block">
				<div className="flex h-full flex-col gap-10 bg-neutral-100">
					<div className="flex h-[72px] flex-col justify-center border-b px-6 py-4">
						<Link href={"/home"} className="flex w-full items-center gap-4 ">
							<Image src={logoIconBlack} alt="" className="h-6 w-auto" />
							<Image src={logoTextBlack} alt="" className="h-5 w-auto" />
						</Link>
					</div>

					<div className="flex flex-1 flex-col justify-between overflow-y-auto px-6 pb-6">
						<div className="">
							<Button
								as={Link}
								href={"/home"}
								fullWidth
								startContent={<Icon name="home" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								<span className="">Home</span>
							</Button>
							<Button
								as={Link}
								href={"/home/discover"}
								fullWidth
								startContent={<Icon name="compass" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Discover
							</Button>
							<Button
								as={Link}
								href={"/home/generate-ai-image"}
								fullWidth
								startContent={<Icon name="ai-image" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Generate AI Images
							</Button>
							<Button
								as={Link}
								href={"/home/become-creator"}
								fullWidth
								startContent={<Icon name="doller-earn" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Become A Creator
							</Button>
							<Button
								as={Link}
								href={"/home/notification/transaction"}
								fullWidth
								startContent={<Icon name="bell" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Notifications
							</Button>
							<Button
								as={Link}
								href={"/home/message"}
								fullWidth
								startContent={<Icon name="message" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Message
							</Button>
							<Button
								as={Link}
								href={"/home/public-images"}
								fullWidth
								startContent={<Icon name="public-access" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Public Images
							</Button>
						</div>

						<div className="">
							<Button
								as={Link}
								href={"/home/settings"}
								fullWidth
								startContent={<Icon name="settings" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Settings
							</Button>
							<Button
								as={Link}
								href={"/login"}
								fullWidth
								startContent={<Icon name="logout" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
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
							href={"/home/wallet-and-payments"}
							isIconOnly
							radius="full"
							className="bg-transparent">
							<Icon name="wallet" className="h-6 w-6" />
						</Button>
						<Button isIconOnly radius="full" className="ml-2 bg-transparent">
							<Avatar src="https://i.pravatar.cc/150?img=36" />
						</Button>
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
						<Button isIconOnly className="bg-neutral-100">
							<Icon name="home" className="h-6 w-6" />
						</Button>
						<Button isIconOnly className="bg-neutral-100">
							<Icon name="bell" className="h-6 w-6" />
						</Button>
						<Button isIconOnly className="bg-neutral-100">
							<Icon name="search" className="h-6 w-6" />
						</Button>
						<Button isIconOnly className="bg-neutral-100">
							<Icon name="message" className="h-6 w-6" />
						</Button>
						<Button isIconOnly className="bg-transparent">
							<Avatar radius="lg" src="https://i.pravatar.cc/150?img=36" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
