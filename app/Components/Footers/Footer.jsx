import logoIconBlack from "@/public/logo-icon-black.png";
import logoTextBlack from "@/public/logo-text-black.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="px-4 md:px-6">
			<div className="flex flex-col justify-between gap-4 border-t py-3 md:flex-row md:items-center xl:py-4">
				<div className="flex flex-wrap items-center justify-between gap-2 md:gap-6">
					<Link href={"/"} className="inline-flex items-center gap-3">
						<Image src={logoIconBlack} alt="" className="hidden h-3 w-auto shrink-0 md:block xl:h-4" />
						<Image src={logoTextBlack} alt="" className="h-2.5 w-auto shrink-0 xl:h-3" />
					</Link>

					<div className="flex flex-wrap items-center divide-x">
						<Link href={"/about"} className="px-2 text-xs dark:text-white xl:text-sm">
							About
						</Link>
						<Link href={"/support"} className="px-2 text-xs dark:text-white xl:text-sm">
							Support
						</Link>
						<Link href={"/support"} className="px-2 text-xs dark:text-white xl:text-sm">
							Terms & Conditions
						</Link>
					</div>
				</div>

				<p className="text-center text-xs xl:text-sm">© 2024 Bashable.art, All rights reserved.</p>
			</div>
		</footer>
	);
}
