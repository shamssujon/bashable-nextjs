import logoIconBlack from "@/public/logo-icon-black.png";
import logoTextBlack from "@/public/logo-text-black.png";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

export default function HeaderBeforeLogin() {
	return (
		<div className="flex items-center justify-between gap-2 border-b bg-white px-6 py-3">
			<Link href={"/"} className="inline-flex items-center gap-4">
				<Image src={logoIconBlack} alt="" className="" />
				<Image src={logoTextBlack} alt="" className="hidden md:block" />
			</Link>

			<div className="flex items-center gap-2">
				<Button as={Link} href={"/signup"} variant="light" size="lg" className=" font-semibold">
					Sign Up
				</Button>
				<Button as={Link} href={"/login"} size="lg" className="bg-black font-semibold text-white">
					Login
				</Button>
			</div>
		</div>
	);
}
