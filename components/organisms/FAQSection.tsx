"use client";

import type { FC } from "react";
import { FAQPanel } from "@app/data/faq-data";
import { useState, useEffect, useRef } from "react";
import RadioGroup from "@app/components/molecules/RadioGroup";
import DisclosureAtom from "@app/components/atoms/Disclosure";
import { gsap } from "gsap";

type FAQSectionProps = {
	data: Array<FAQPanel>;
};

type FAQSectionState = {
	selected: number;
};

const FAQSection: FC<FAQSectionProps> = ({ data }): React.ReactElement => {
	const [state, setState] = useState<FAQSectionState>({ selected: 0 });
	const wrapper = useRef<HTMLInputElement>(null);
	const selectedData = data[state.selected];
	const half = Math.ceil(selectedData.blocks.length / 2);
	const leftData = selectedData.blocks.slice(0, half);
	const rightData = selectedData.blocks.slice(half, selectedData.blocks.length);

	function onUpdateFAQ(e: any) {
		const n = e?.detail?.data?.selected;

		setState({ selected: n });
	}

	useEffect(() => {
		document.addEventListener("_upateFAQ_", onUpdateFAQ);
		return () => {};
	}, []);

	useEffect(() => {
		gsap.killTweensOf(wrapper.current);
		gsap.set(wrapper.current, { alpha: 0 });
		gsap.to(wrapper.current, { duration: 1, alpha: 1, ease: "power2.out" });
		return () => {};
	});

	return (
		<>
			<RadioGroup data={data} selected={state.selected} />
			<div
				ref={wrapper}
				className="w-full mt-10 block xl:flex xl:justify-between"
			>
				<div className="inline-block align-top w-full xl:w-[47%]">
					{leftData.map((blockLeft: any, index: number) => (
						<div
							key={"block" + state.selected + "-left" + index}
							className="w-full"
						>
							<DisclosureAtom
								question={blockLeft.question}
								answer={blockLeft.answer}
							/>
							<div className="w-full h-[2px] bg-[#e8e8e8]"></div>
						</div>
					))}
				</div>
				<div className="inline-block align-top w-full xl:w-[47%]">
					{rightData.map((blockRight: any, index: number) => (
						<div
							key={"block" + state.selected + "-right" + index}
							className="w-full"
						>
							<DisclosureAtom
								question={blockRight.question}
								answer={blockRight.answer}
							/>
							<div className="w-full h-[2px] bg-[#e8e8e8]"></div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default FAQSection;
