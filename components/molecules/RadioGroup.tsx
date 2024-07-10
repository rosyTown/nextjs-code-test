"use client";

import type { FC } from "react";
import { FAQPanel } from "@app/data/faq-data";
import Radio from "@app/components/atoms/Radio";

type RadioGroupProps = {
	data: Array<FAQPanel>;
	selected: number;
};

const RadioGroup: FC<RadioGroupProps> = ({
	data,
	selected,
}): React.ReactElement => {
	function handleButtonClick(e: any) {
		const n = Number(e?.currentTarget?.dataset?.num);

		document.dispatchEvent(
			new CustomEvent("_upateFAQ_", { detail: { data: { selected: n } } }),
		);
	}

	return (
		<div className="w-fit mx-auto">
			{data.map((panel, index) => (
				<Radio
					key={"mb" + index}
					num={index}
					title={panel.label}
					selected={index == selected}
					clickFunction={handleButtonClick}
				/>
			))}
		</div>
	);
};

export default RadioGroup;
