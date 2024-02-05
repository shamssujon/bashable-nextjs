import Footer from "@/app/Components/Footers/Footer";
import logoIconBlack from "@/public/logo-icon-black.png";
import logoTextBlack from "@/public/logo-text-black.png";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
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
					<form>
						<div className="flex flex-col gap-4">
							<div className="">
								<Input
									size="lg"
									type="email"
									label="Email"
									labelPlacement="outside"
									placeholder="Enter your email"
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
									label="Password"
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
							<Checkbox size="sm">I accepted terms & conditions</Checkbox>

							<Button
								as={Link}
								href={"/signup"}
								fullWidth
								className="mt-4 h-auto bg-black/90 py-3 text-lg font-semibold text-white shadow">
								Sign up
							</Button>
						</div>
					</form>

					<div className="my-6 flex items-center justify-center gap-3 text-sm before:h-px before:flex-grow before:bg-slate-200 before:content-[''] after:h-px after:flex-grow after:bg-slate-200 after:content-['']">
						or Sign with
					</div>

					<div className="grid gap-4">
						<Button
							as={Link}
							href={"/signup"}
							startContent={<FcGoogle className="text-2xl" />}
							fullWidth
							className="h-auto bg-neutral-100 py-3 font-medium">
							Continue with Google
						</Button>
						<Button
							as={Link}
							href={"/signup"}
							startContent={<FaDiscord className="text-2xl text-[#5865f2]" />}
							fullWidth
							className="h-auto bg-neutral-100 py-3 font-medium">
							Continue with Discord
						</Button>
					</div>

					<p className="mt-6 text-xs">
						Already have an account?{" "}
						<Link href="/login" className="text-xs font-bold text-black hover:text-primary">
							Sign In
						</Link>
					</p>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
