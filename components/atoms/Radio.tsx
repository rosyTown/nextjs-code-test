"use client";

import type { FC } from "react";
import { Button } from "@headlessui/react";
import { gsap } from "gsap";

type RadioProps = {
	num: number;
	title: string;
	selected: boolean;
	clickFunction: (e: any) => void;
};

const Radio: FC<RadioProps> = ({
	num,
	title,
	selected,
	clickFunction,
}): React.ReactElement => {
	function getStyles() {
		return selected
			? "bg-black text-white border-black"
			: "bg-[#f5f5f5] text-black border-[#dedbdb]";
	}

	function handleMouseOver(e: any) {
		if (selected) return;

		const btn = e.currentTarget;
		gsap.killTweensOf(btn);
		gsap.to(btn, {
			duration: 0.2,
			scaleX: 1.1,
			scaleY: 1.1,
			ease: "power2.out",
			transformOrigin: "50% 50%",
		});
	}

	function handleMouseOut(e: any) {
		if (selected) return;

		const btn = e.currentTarget;
		gsap.killTweensOf(btn);
		gsap.to(btn, {
			duration: 0.3,
			scaleX: 1,
			scaleY: 1,
			ease: "power2.out",
			transformOrigin: "50% 50%",
		});
	}

	function handleClick(e: any) {
		if (selected) return;

		const btn = e.currentTarget;
		gsap.killTweensOf(btn);
		gsap.to(btn, {
			duration: 0.3,
			scaleX: 1,
			scaleY: 1,
			ease: "power2.out",
			transformOrigin: "50% 50%",
		});

		if (clickFunction) clickFunction(e);
	}

	return (
		<Button
			data-num={num}
			disabled={selected}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onClick={handleClick}
			className={
				getStyles() +
				" border-solid border-[1px] rounded-full mx-1 py-3 px-4 text-sm font-semibold data-[hover]:bg-sky-500 data-[active]:bg-sky-700 sm:mx-2 sm:px-6"
			}
		>
			{title}
		</Button>
	);
};

export default Radio;
