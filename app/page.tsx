"use client";
import { useRef } from "react";
import {
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import About from "@/components/homeSections/desktopCom/About";
import Landing from "@/components/homeSections/desktopCom/Landing";
import Services from "@/components/homeSections/desktopCom/Services";
import Stats from "@/components/homeSections/desktopCom/Stats";
import Team from "@/components/homeSections/desktopCom/Team";
import Visit from "@/components/homeSections/desktopCom/Visit";
import WhyUs from "@/components/homeSections/desktopCom/WhyUs";
import Testmonial from "@/components/homeSections/desktopCom/Testmonial";
import Packages from "@/components/homeSections/desktopCom/Packages";

export default function Home() {
	// const ref = useRef<HTMLDivElement>(null);
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// 	offset: ["0 1", "1.33 1"],
	// });
	// const scaleProgress = useTransform(
	// 	scrollYProgress,
	// 	[0, 1],
	// 	[0.8, 1]
	// );
	// const opacityProgress = useTransform(
	// 	scrollYProgress,
	// 	[0, 1],
	// 	[0.6, 1]
	// );
	return (
		<div
			// ref={ref}
			// style={{
			// 	scale: scaleProgress,
			// 	opacity: opacityProgress,
			// }}
			className='w-[100vw]'
		>
			<Landing />
			<Stats />
			<Services />
			<WhyUs />
			<About />
			<Team />
			<Testmonial />
			<Packages />
			<Visit />
		</div>
	);
}
