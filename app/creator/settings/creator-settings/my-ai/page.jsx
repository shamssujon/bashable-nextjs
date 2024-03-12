import { Avatar, Button, Input } from "@nextui-org/react";

export default function MyAi() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<div className="flex items-center gap-4">
				<Avatar size="lg" radius="lg" src="https://i.pravatar.cc/150?img=36" className="shrink-0" />
				<h5 className="text-xl font-semibold">Generate messages in chats to sound just like you!</h5>
			</div>

			<div className="mt-6 space-y-5">
				<div className="">
					<Input
						type="text"
						label="What I prefer to call my fans"
						description="Eg. Babe, mate, sir, hun, etc. Separate the options with a comma."
						classNames={{
							inputWrapper: "px-6",
							label: "font-medium lg:text-base",
							description: "mt-1",
							input: "font-semibold text-base",
						}}
					/>
				</div>
				<div className="">
					<Input
						type="text"
						label="How I want to greet my fans"
						description="Eg. Hey babe!"
						classNames={{
							inputWrapper: "px-6",
							label: "font-medium lg:text-base",
							description: "mt-1",
							input: "font-semibold text-base",
						}}
					/>
				</div>
				<div className="">
					<Input
						type="text"
						label="My favourite emojis to use"
						description="Eg. 😂😍😘 The Al will use other emojis where appropriate."
						classNames={{
							inputWrapper: "px-6",
							label: "font-medium lg:text-base",
							description: "mt-1",
							input: "font-semibold text-base",
						}}
					/>
				</div>
				<div className="">
					<Input
						type="text"
						label="Where am I from when my fans ask?"
						description="Eg. London. If empty, the Al will not answer this question."
						classNames={{
							inputWrapper: "px-6",
							label: "font-medium lg:text-base",
							description: "mt-1",
							input: "font-semibold text-base",
						}}
					/>
				</div>
				<div className="">
					<Input
						type="text"
						label="What am I not willing to do if my fan request"
						description="Eg. videos on demand, meet in person. Separate the options with a comma."
						classNames={{
							inputWrapper: "px-6",
							label: "font-medium lg:text-base",
							description: "mt-1",
							input: "font-semibold text-base",
						}}
					/>
				</div>
				<div className="">
					<Button fullWidth size="lg" className="bg-orange-500 font-semibold text-white">
						Save preferences
					</Button>
				</div>
			</div>
		</div>
	);
}
