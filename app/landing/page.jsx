import Footer from "@/app/Components/Footers/Footer";
import HeaderBeforeLogin from "@/app/Components/Headers/HeaderBeforeLogin";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

import homeStar from "@/public/home-star.svg";
import homeImg from "@/public/home-women.png";

export default function Home() {
	return (
		<div className="relative flex min-h-screen flex-col justify-between overflow-x-hidden">
			<HeaderBeforeLogin></HeaderBeforeLogin>

			<div className="relative mx-auto grid w-full max-w-screen-xl flex-1 grid-cols-1 overflow-hidden p-4 lg:grid-cols-2 lg:items-center lg:p-6">
				<div className="flex max-w-md flex-col justify-between gap-10 lg:justify-normal">
					<div className="">
						<h2 className="text-3xl font-semibold lg:text-4xl">Create, Share, Thrive!</h2>
						<h4 className="mt-2 text-xl font-medium lg:text-2xl">Where Your Passion Pays Off.</h4>
						<p className="mt-2 text-sm lg:text-base">
							Unleash your creativity & connect with fans. Turn your passion into profit!
						</p>
					</div>
					<div className="space-y-4">
						<div className="flex items-start gap-2">
							<div className="mt-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 13 13"
									fill="currentColor"
									fillRule="evenodd"
									clipRule="evenodd"
									className="h-3 w-3">
									<path d="M7.7.5H5.3v3.103L3.106 1.409 1.409 3.106 3.603 5.3H.5v2.4h3.103L1.409 9.894l1.697 1.697L5.3 9.397V12.5h2.4V9.397l2.194 2.194 1.697-1.697L9.397 7.7H12.5V5.3H9.397l2.194-2.194-1.697-1.697L7.7 3.603V.5Z" />
								</svg>
							</div>
							<div className="">
								<h6 className="font-semibold lg:text-lg">Gain rapidly growing followers</h6>
								<p className="text-xs lg:text-sm">
									We are the fastest growing community. Please get a fast-growing your fans.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-2">
							<div className="mt-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 13 13"
									fill="currentColor"
									fillRule="evenodd"
									clipRule="evenodd"
									className="h-3 w-3">
									<path d="M7.7.5H5.3v3.103L3.106 1.409 1.409 3.106 3.603 5.3H.5v2.4h3.103L1.409 9.894l1.697 1.697L5.3 9.397V12.5h2.4V9.397l2.194 2.194 1.697-1.697L9.397 7.7H12.5V5.3H9.397l2.194-2.194-1.697-1.697L7.7 3.603V.5Z" />
								</svg>
							</div>
							<div className="">
								<h6 className="font-semibold lg:text-lg">Discover hot and fascinating creations!</h6>
								<p className="text-xs lg:text-sm">
									Explore sizzling and captivating creations that will ignite your curiosity.
								</p>
							</div>
						</div>
					</div>

					<div className="">
						<Button
							as={Link}
							href={"/signup"}
							fullWidth
							className="h-auto bg-black/90 py-3 text-lg font-semibold text-white shadow">
							Sign up
						</Button>
					</div>
				</div>
				<div className="absolute right-0 top-28 -z-10 mx-auto opacity-30 before:absolute before:-left-8 before:bottom-0 before:-z-10 before:hidden before:h-[600px] before:w-[600px] before:rounded-full before:bg-slate-200 before:content-[''] md:opacity-100 lg:relative lg:right-auto lg:top-0 lg:before:block">
					<Image src={homeImg} alt="" className="w-[400px] max-w-none lg:w-[500px]" />
					<Image
						src={homeStar}
						alt=""
						className="absolute left-[300px] top-20 w-[100px] lg:left-[400px] lg:top-28 lg:w-[150px]"
					/>
				</div>
			</div>

			<Footer></Footer>
		</div>
	);
}
