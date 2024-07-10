"use client";

import type { FC } from "react";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

type DisclosureAtomProps = {
	question: string;
	answer: string;
};

const DisclosureAtom: FC<DisclosureAtomProps> = ({
	question,
	answer,
}): React.ReactElement => {
	return (
		<Disclosure>
			{({ open }) => (
				<>
					<DisclosureButton className="flex justify-between w-full py-[20px] text-black font-semibold text-[20px] text-left">
						{question}
						<ChevronDownIcon
							className={clsx(
								"w-[40px] ml-[10px] mt-[16px] sm:w-[20px] sm:mt-[6px]",
								open && "rotate-180",
							)}
						/>
					</DisclosureButton>
					<DisclosurePanel
						transition
						className="text-black text-[17px] leading-7 pb-[24px] origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
					>
						{answer}
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
};

export default DisclosureAtom;
