"use client";

import { Icon } from "@/app/Components/Icons/Icons";
import { Button, Link, Textarea } from "@nextui-org/react";

export default function Report() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<h5 className="mb-4 text-base font-semibold md:mb-6 md:text-xl flex items-center gap-2">
                <Icon name='flag' className='size-6' />
                Report
                </h5>

			<div className="space-y-4">
				<Textarea placeholder="Enter your issue" className="" />
				<Button
					as={Link}
					href=""
					fullWidth
					className="h-auto bg-black/90 py-3 text-lg font-semibold text-white shadow">
					Submit Report
				</Button>
			</div>
		</div>
	);
}
