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
						<h4 className="mb-2 text-2xl font-semibold">Forgot your password?</h4>
						<p className="text-xs text-content4-foreground">
							Don&apos;t worry we will send you a link to your email address to reset password. It&apos;s matter of
							a click for you.
						</p>
					</div>
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

							<Button
								as={Link}
								href={"/"}
								fullWidth
								className="mt-4 h-auto bg-black/90 py-3 text-lg font-semibold text-white shadow">
								Send link
							</Button>
						</div>
					</form>

					<p className="mt-6 text-xs">
						<Link href="/login" className="text-xs font-bold text-black hover:text-primary">
							Go back to Login
						</Link>
					</p>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
