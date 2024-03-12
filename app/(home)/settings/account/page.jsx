import { Icon } from "@/app/Components/Icons/Icons";
import { Button, Input, Link } from "@nextui-org/react";

export default function AccountSettings() {
	return (
		<div className="w-full max-w-xl mx-auto">
			<form>
				<div className="flex flex-col gap-4">
					<div className="">
						<Input
							size="lg"
							type="password"
							label="Add a New Password"
							labelPlacement="outside"
							placeholder="Password"
							classNames={{
								label: "text-sm font-semibold",
								inputWrapper: "px-6",
							}}
						/>
					</div>
					<div className="">
						<Input
							size="lg"
							type="password"
							label="Confirm New Password"
							labelPlacement="outside"
							placeholder="Confirm New password"
							classNames={{
								label: "text-sm font-semibold",
								inputWrapper: "px-6",
							}}
						/>
					</div>

					<Button
						as={Link}
						href={""}
						fullWidth
						className="mt-4 h-auto bg-black/90 py-3 text-lg font-semibold text-white shadow">
						Update Password
					</Button>

					<Button
						as={Link}
						href={""}
						fullWidth
						color="danger"
						variant="bordered"
						startContent={<Icon name="trash-circle" className="h-6 w-6" />}
						className="mt-4 h-auto py-3 text-lg font-semibold">
						Delete my account
					</Button>
				</div>
			</form>
		</div>
	);
}
