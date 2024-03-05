"use client";

import { Accordion, AccordionItem, Button, Link, Textarea } from "@nextui-org/react";

export default function HelpAndSupport() {
	return (
		<div className="mx-auto max-w-screen-sm">
			<div className="">
				<h4 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">FAQs</h4>

				<div className="">
					<Accordion
						variant="splitted"
						showDivider={false}
						className=""
						itemClasses={{
							base: "group-[.is-splitted]:shadow-none group-[.is-splitted]:bg-neutral-50",
							title: "font-semibold text-sm lg:text-base",
							content: "pb-4 pt-0 text-sm lg:text-base",
						}}>
						<AccordionItem key="1" aria-label="Accordion 1" title="How do I file a claim?">
							Yes, many of our policies offer customization options to align with your specific needs and
							budget.
						</AccordionItem>
						<AccordionItem key="2" aria-label="Accordion 2" title="Can I customize my coverage?">
							Yes, many of our policies offer customization options to align with your specific needs and
							budget.
						</AccordionItem>
						<AccordionItem key="3" aria-label="Accordion 2" title="How can I update my policy information?">
							Yes, many of our policies offer customization options to align with your specific needs and
							budget.
						</AccordionItem>
						<AccordionItem key="4" aria-label="Accordion 2" title="What discounts are available?">
							Yes, many of our policies offer customization options to align with your specific needs and
							budget.
						</AccordionItem>
						<AccordionItem key="5" aria-label="Accordion 2" title="Do you offer safe driving incentives?">
							Yes, many of our policies offer customization options to align with your specific needs and
							budget.
						</AccordionItem>
					</Accordion>
				</div>
			</div>

			<div className="mt-10">
				<h4 className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl">Text to the Bashable support team:</h4>

				<div className="space-y-4">
					<Textarea placeholder="Enter your issue" className="" />
					<Button
						as={Link}
						href=""
						fullWidth
						className="h-auto bg-black/90 py-3 text-lg font-semibold text-white shadow">
						Send
					</Button>
				</div>
			</div>
		</div>
	);
}
