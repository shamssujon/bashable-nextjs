import { Icon } from "@/app/Components/Icons/Icons";
import { Button, User } from "@nextui-org/react";

export default function BlockedAccounts() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<h5 className="mb-4 flex items-center gap-2 text-base font-semibold md:mb-6 md:text-xl">
				<Icon name="user-block" className="size-6" />
				Blocked Accounts
			</h5>

			<div className="space-y-3 lg:space-y-4">
				<div className="flex items-center justify-between gap-4">
					<User
						name="@johnroger"
						avatarProps={{
							src: "https://i.pravatar.cc/150?img=36",
							size: "md",
						}}
						classNames={{
							name: "text-base font-semibold",
						}}
					/>

					<Button className="bg-neutral-100 font-semibold">Unblock</Button>
				</div>
				<div className="flex items-center justify-between gap-4">
					<User
						name="@karina12"
						avatarProps={{
							src: "https://i.pravatar.cc/150?img=37",
							size: "md",
						}}
						classNames={{
							name: "text-base font-semibold",
						}}
					/>

					<Button className="bg-neutral-100 font-semibold">Unblock</Button>
				</div>
				<div className="flex items-center justify-between gap-4">
					<User
						name="@Reshma001"
						avatarProps={{
							src: "https://i.pravatar.cc/150?img=38",
							size: "md",
						}}
						classNames={{
							name: "text-base font-semibold",
						}}
					/>

					<Button className="bg-neutral-100 font-semibold">Unblock</Button>
				</div>
				<div className="flex items-center justify-between gap-4">
					<User
						name="@abdul"
						avatarProps={{
							src: "https://i.pravatar.cc/150?img=39",
							size: "md",
						}}
						classNames={{
							name: "text-base font-semibold",
						}}
					/>

					<Button className="bg-neutral-100 font-semibold">Unblock</Button>
				</div>
				<div className="flex items-center justify-between gap-4">
					<User
						name="@selinagomez"
						avatarProps={{
							src: "https://i.pravatar.cc/150?img=35",
							size: "md",
						}}
						classNames={{
							name: "text-base font-semibold",
						}}
					/>

					<Button className="bg-neutral-100 font-semibold">Unblock</Button>
				</div>
			</div>
		</div>
	);
}
