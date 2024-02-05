import { Icon } from "@/app/Components/Icons/Icons";
import logoIconBlack from "@/public/logo-icon-black.png";
import logoTextBlack from "@/public/logo-text-black.png";
import { Avatar, Button, Input, Link } from "@nextui-org/react";
import Image from "next/image";

export default function FanHomeLayout({ children }) {
	return (
		<div className="flex">
			<div className="sticky top-0 h-screen w-[350px] shrink-0">
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
								href={"/home"}
								fullWidth
								startContent={<Icon name="compass" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Discover
							</Button>
							<Button
								as={Link}
								href={"/home"}
								fullWidth
								startContent={<Icon name="ai-image" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Generate AI Images
							</Button>
							<Button
								as={Link}
								href={"/home"}
								fullWidth
								startContent={<Icon name="doller-earn" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Become A Creator
							</Button>
							<Button
								as={Link}
								href={"/home"}
								fullWidth
								startContent={<Icon name="bell" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Notifications
							</Button>
							<Button
								as={Link}
								href={"/home"}
								fullWidth
								startContent={<Icon name="message" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Message
							</Button>
							<Button
								as={Link}
								href={"/home"}
								fullWidth
								startContent={<Icon name="public-access" className="h-6 w-6" />}
								className="h-auto justify-start gap-3 bg-transparent py-3 text-xl font-semibold">
								Public Images
							</Button>
						</div>

						<div className="">
							<Button
								as={Link}
								href={"/home"}
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

			<div className="w-full">
				<div className="sticky top-0 flex h-[72px] items-center justify-between gap-4 border-b bg-white px-6">
					<div className="mx-auto max-w-screen-sm flex-1">
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

					<div className="flex items-center gap-2">
						<Button isIconOnly radius="full" className="bg-transparent">
							<Icon name="message" className="h-6 w-6" />
						</Button>
						<Button isIconOnly radius="full" className="bg-transparent">
							<Icon name="bell" className="h-6 w-6" />
						</Button>
						<Button isIconOnly radius="full" className="bg-transparent">
							<Icon name="wallet" className="h-6 w-6" />
						</Button>
						<Button isIconOnly radius="full" className="ml-2 bg-transparent">
							<Avatar src="https://i.pravatar.cc/150?img=36" />
						</Button>
					</div>
				</div>

				<div className="p-6">{children}</div>
			</div>
		</div>
	);
}
