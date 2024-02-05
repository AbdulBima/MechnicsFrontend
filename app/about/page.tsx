import About from "@/components/homeSections/desktopCom/About";
import Stats from "@/components/homeSections/desktopCom/Stats";
import Team from "@/components/homeSections/desktopCom/Team";
import Visit from "@/components/homeSections/desktopCom/Visit";
import WhyUs from "@/components/homeSections/desktopCom/WhyUs";
import MobileAboutUs from "@/components/homeSections/mobileCom/MobileAboutUs";
import React from "react";

const AboutPage = () => {
	return (
		<>
			<About />
			<Stats />
			<Team />
			<WhyUs />
			<Visit />
		</>
	);
};

export default AboutPage;
