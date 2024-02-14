"use client";

import { Image, Input, Select, SelectItem } from "@nextui-org/react";

export default function PublicImages() {
	return (
		<div className="mx-auto max-w-screen-lg lg:py-6">
			<div className="">
				<div className="grid grid-cols-2 gap-3 md:gap-5">
					<div className="">
						<Select size="sm" variant="faded" className="" defaultSelectedKeys="1">
							<SelectItem key={1} value="randomized">
								Randomized
							</SelectItem>
							<SelectItem key={2} value="popular">
								Popular
							</SelectItem>
							<SelectItem key={3} value="popular">
								Most Recent
							</SelectItem>
						</Select>
					</div>
					<div className="">
						<Select size="sm" variant="faded" className="" label="Select Model">
							<SelectItem key={1} value="randomized">
								Model 1
							</SelectItem>
							<SelectItem key={2} value="popular">
								Mdoel 2
							</SelectItem>
							<SelectItem key={3} value="popular">
								Model 3
							</SelectItem>
						</Select>
					</div>
					<div className="col-span-2 md:col-span-1">
						<Input size="sm" variant="faded" type="email" placeholder="Search by prompt text" />
					</div>
					<div className="col-span-2 md:col-span-1">
						<Input size="sm" variant="faded" type="email" placeholder="Search by username" />
					</div>
				</div>
			</div>

			<div className="mt-8 grid grid-cols-2 gap-5 xl:grid-cols-3 2xl:grid-cols-4">
				<Image
					isZoomed
					alt="NextUI Fruit Image with Zoom"
					src="https://mighty.tools/mockmind-api/content/human/1.jpg"
					classNames={{
						wrapper: "",
						zoomedWrapper: "aspect-5/6",
						img: "w-full h-full",
					}}
				/>
				<Image
					isZoomed
					alt="NextUI Fruit Image with Zoom"
					src="https://mighty.tools/mockmind-api/content/human/2.jpg"
					classNames={{
						wrapper: "",
						zoomedWrapper: "aspect-5/6",
						img: "w-full h-full",
					}}
				/>
				<Image
					isZoomed
					alt="NextUI Fruit Image with Zoom"
					src="https://mighty.tools/mockmind-api/content/human/3.jpg"
					classNames={{
						wrapper: "",
						zoomedWrapper: "aspect-5/6",
						img: "w-full h-full",
					}}
				/>
				<Image
					isZoomed
					alt="NextUI Fruit Image with Zoom"
					src="https://mighty.tools/mockmind-api/content/human/4.jpg"
					classNames={{
						wrapper: "",
						zoomedWrapper: "aspect-5/6",
						img: "w-full h-full",
					}}
				/>
				<Image
					isZoomed
					alt="NextUI Fruit Image with Zoom"
					src="https://mighty.tools/mockmind-api/content/human/5.jpg"
					classNames={{
						wrapper: "",
						zoomedWrapper: "aspect-5/6",
						img: "w-full h-full",
					}}
				/>
				<Image
					isZoomed
					alt="NextUI Fruit Image with Zoom"
					src="https://mighty.tools/mockmind-api/content/human/6.jpg"
					classNames={{
						wrapper: "",
						zoomedWrapper: "aspect-5/6",
						img: "w-full h-full",
					}}
				/>
				<Image
					isZoomed
					alt="NextUI Fruit Image with Zoom"
					src="https://mighty.tools/mockmind-api/content/human/7.jpg"
					classNames={{
						wrapper: "",
						zoomedWrapper: "aspect-5/6",
						img: "w-full h-full",
					}}
				/>
				<Image
					isZoomed
					alt="NextUI Fruit Image with Zoom"
					src="https://mighty.tools/mockmind-api/content/human/8.jpg"
					classNames={{
						wrapper: "",
						zoomedWrapper: "aspect-5/6",
						img: "w-full h-full",
					}}
				/>
			</div>
		</div>
	);
}
