import { Button, Image, Link, Textarea } from "@nextui-org/react";

export default function GenerateAiImage() {
	return (
		<div className="mx-auto max-w-screen-lg lg:py-6">
			<div className="">
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
					<div className="">
						<Textarea
							size="lg"
							variant="faded"
							label="Prompt"
							labelPlacement="outside"
							classNames={{
								label: "text-sm font-semibold",
								inputWrapper: "px-4",
							}}
						/>
					</div>
					<div className="">
						<Textarea
							size="lg"
							variant="faded"
							label="Negative Prompt"
							labelPlacement="outside"
							classNames={{
								label: "text-sm font-semibold",
								inputWrapper: "px-4",
							}}
						/>
					</div>
				</div>

				<div className="mt-5">
					<Button
						as={Link}
						href=""
						fullWidth
						className="h-auto bg-black/90 py-3 text-lg font-semibold text-white shadow">
						Generate
					</Button>
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
