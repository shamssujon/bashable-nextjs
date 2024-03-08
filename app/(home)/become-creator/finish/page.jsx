"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { Button, Link } from "@nextui-org/react";

export default function Finish() {
	return (
		<div className="flex flex-1 flex-col justify-between gap-8">
			<div className="text-center">
				<div className="">
					<Player
						autoplay={true}
						loop={true}
						controls={false}
						src="https://lottie.host/bc5cb4ac-7d65-4ad9-87a6-e2230bdf70fe/7KU1n2ISCi.json"
						style={{ height: "200px", width: "200px" }}></Player>
				</div>
				<p className="mt-4 font-semibold text-default-900">
					Congratulations,You are now officially a <span className="text-orange-500">Bashable Creator</span>
				</p>
			</div>

			<div className="flex flex-col items-center justify-end gap-4 md:flex-row">
				{/* <Button
					as={Link}
					href={"/become-creator/banner"}
					variant="light"
					size="lg"
					className="font-semibold text-foreground-500 hover:text-foreground-900">
					Skip for now
				</Button> */}
				<Button
					as={Link}
					href={"/creator"}
					size="lg"
					className="w-full bg-black font-semibold text-white md:w-auto">
					Finish
				</Button>
			</div>
		</div>
	);
}
