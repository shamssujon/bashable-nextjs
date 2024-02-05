import Footer from "@/app/Components/Footers/Footer";
import logoIconBlack from "@/public/logo-icon-black.png";
import logoTextBlack from "@/public/logo-text-black.png";
import { Button, Input, Link } from "@nextui-org/react";
import Image from "next/image";

export default function Login() {
	return (
		<div className="relative flex min-h-screen flex-col justify-between overflow-x-hidden bg-white md:bg-neutral-50">
			<div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col justify-center p-6">
				<div className="mb-6 text-center">
					<Link href={"/"} className="inline-flex items-center gap-3">
						<Image src={logoIconBlack} alt="" className="h-4 w-auto" />
						<Image src={logoTextBlack} alt="" className="h-3.5 w-auto" />
					</Link>
				</div>
				<div className="w-full rounded-3xl text-center md:bg-white md:p-8 md:shadow">
					<div className="mb-6">
						<h4 className="text-2xl font-semibold">Reset your password</h4>
					</div>
					<form>
						<div className="flex flex-col gap-4">
							<div className="">
								<Input
									size="lg"
									type="password"
									label="New Password"
									labelPlacement="outside"
									placeholder="Enter a password"
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
									label="Confirm Password"
									labelPlacement="outside"
									placeholder="Confirm your password"
									classNames={{
										label: "text-sm font-semibold",
										inputWrapper: "px-6",
									}}
								/>
							</div>

							<Button
								as={Link}
								href={"/home"}
								fullWidth
								className="mt-4 h-auto bg-black/90 py-3 text-lg font-semibold text-white shadow">
								Reset Password
							</Button>
						</div>
					</form>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
