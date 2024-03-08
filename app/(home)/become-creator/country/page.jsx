"use client";

import { Avatar, Button, Link, Select, SelectItem } from "@nextui-org/react";

export default function Country() {
	return (
		<div className="flex flex-1 flex-col justify-between gap-8">
			<div className="text-center">
				<h4 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">What is your country of residency?</h4>

				<Select className="max-w-xs" label="Select country">
					<SelectItem
						key="usa"
						startContent={<Avatar alt="USA" className="h-6 w-6" src="https://flagcdn.com/us.svg" />}>
						USA
					</SelectItem>
					<SelectItem
						key="argentina"
						startContent={<Avatar alt="Argentina" className="h-6 w-6" src="https://flagcdn.com/ar.svg" />}>
						Argentina
					</SelectItem>
					<SelectItem
						key="venezuela"
						startContent={<Avatar alt="Venezuela" className="h-6 w-6" src="https://flagcdn.com/ve.svg" />}>
						Venezuela
					</SelectItem>
					<SelectItem
						key="brazil"
						startContent={<Avatar alt="Brazil" className="h-6 w-6" src="https://flagcdn.com/br.svg" />}>
						Brazil
					</SelectItem>
					<SelectItem
						key="switzerland"
						startContent={
							<Avatar alt="Switzerland" className="h-6 w-6" src="https://flagcdn.com/ch.svg" />
						}>
						Switzerland
					</SelectItem>
					<SelectItem
						key="germany"
						startContent={<Avatar alt="Germany" className="h-6 w-6" src="https://flagcdn.com/de.svg" />}>
						Germany
					</SelectItem>
					<SelectItem
						key="spain"
						startContent={<Avatar alt="Spain" className="h-6 w-6" src="https://flagcdn.com/es.svg" />}>
						Spain
					</SelectItem>
					<SelectItem
						key="france"
						startContent={<Avatar alt="France" className="h-6 w-6" src="https://flagcdn.com/fr.svg" />}>
						France
					</SelectItem>
					<SelectItem
						key="italy"
						startContent={<Avatar alt="Italy" className="h-6 w-6" src="https://flagcdn.com/it.svg" />}>
						Italy
					</SelectItem>
					<SelectItem
						key="mexico"
						startContent={<Avatar alt="Mexico" className="h-6 w-6" src="https://flagcdn.com/mx.svg" />}>
						Mexico
					</SelectItem>
				</Select>

				<p className="mt-4 text-sm text-foreground-500">
					Please note that you will not be able to change this later.
				</p>
			</div>

			<div className="flex flex-col items-center justify-end gap-4 md:flex-row">
				{/* <Button
					as={Link}
					href={"/become-creator/verify"}
					variant="light"
					size="lg"
					className="font-semibold text-foreground-500 hover:text-foreground-900">
					Skip for now
				</Button> */}
				<Button
					as={Link}
					href={"/become-creator/verify"}
					size="lg"
					className="w-full bg-black font-semibold text-white md:w-auto">
					Continue
				</Button>
			</div>
		</div>
	);
}
