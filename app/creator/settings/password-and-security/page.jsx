"use client";
import { Icon } from "@/app/Components/Icons/Icons";
import { Button, Input, Link } from "@nextui-org/react";
import React from "react";

export default function CreatorPasswordSettings() {
	const [isVisible, setIsVisible] = React.useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<div className="mx-auto max-w-xl">
			<form>
				<div className="flex flex-col gap-4">
					<div className="">
						<Input
							size="lg"
							type={isVisible ? "text" : "password"}
							placeholder="Password"
							label="Add a Password"
							labelPlacement="outside"
							description="Min 9 max 30 characters, at least a number ,an upper & lower case letter."
							endContent={
								<Button
									isIconOnly
									radius="full"
									className="bg-transparent"
									type="button"
									onClick={toggleVisibility}>
									{isVisible ? (
										<Icon name="eye" className="pointer-events-none size-5" />
									) : (
										<Icon name="eye-slash" className="pointer-events-none size-5" />
									)}
								</Button>
							}
							classNames={{
								label: "text-sm font-semibold",
								inputWrapper: "pl-6",
							}}
						/>
					</div>
					<div className="">
						<Input
							size="lg"
							type={isVisible ? "text" : "password"}
							placeholder="Confirm Password"
							label="Confirm New Password"
							labelPlacement="outside"
							endContent={
								<Button
									isIconOnly
									radius="full"
									className="bg-transparent"
									type="button"
									onClick={toggleVisibility}>
									{isVisible ? (
										<Icon name="eye" className="pointer-events-none size-5" />
									) : (
										<Icon name="eye-slash" className="pointer-events-none size-5" />
									)}
								</Button>
							}
							classNames={{
								label: "text-sm font-semibold",
								inputWrapper: "pl-6",
							}}
						/>
					</div>

					<Button
						as={Link}
						href={""}
						fullWidth
						className="mt-4 h-auto bg-orange-500 py-3 text-lg font-semibold text-white shadow">
						Add Password
					</Button>
				</div>
			</form>

			<div className="mt-8">
				<h4 className="mb-4 text-lg font-semibold lg:text-xl">Two-Factor Authentication</h4>
				<Button
					as={Link}
					href={""}
					fullWidth
					className="h-auto bg-black py-3 text-lg font-semibold text-white shadow">
					Enable Two Factor Authentication
				</Button>
				<p className="mt-4 text-sm leading-tight text-foreground-400">
					Note: If you are using a social login method (Google, Twitter), you'll need to add a password in
					order to enable two-factor authentication. <br /> If you lose the device where your two-factor
					authentication code is, you'll need to contact support and verify your identity again.
				</p>
			</div>
		</div>
	);
}
