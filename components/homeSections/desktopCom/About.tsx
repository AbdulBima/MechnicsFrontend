import React from "react";
import MobileAboutUs from "../mobileCom/MobileAboutUs";

const About = () => {
	return (
		<>
			<div className='hidden md:flex'>
				<div className='flex flex-col items-center justify-center h-[100vh] bg-black'>
					<h2 className='brandtitle  text-red-600'>
						ABOUT US
					</h2>

					<p className='bxti hidden px-80 text-white text-center md:mt-4 md:block'>
						THE JOURNEY BEHIND OUR AUTO SERVICE
						CENTER
					</p>

					<p className=' hidden text-white opacity-100 text-center px-96 md:mt-4 md:block'>
						At our workshop, we pride ourselves
						on a rich history of providing
						exceptional automotive services.
						With a commitment to customer
						satisfaction, our skilled team of
						technicians ensures your vehicle
						receives top-notch care. We navigate
						the complexities of car maintenance
						and repair with expertise, offering
						transparent communication and
						efficient solutions.
					</p>

					<div className='w-44 mt-4 md:mt-8'>
						<a
							href='/about'
							className='bg-transparent px-6 py-3 border border-white text-sm font-medium text-white shadow hover:text-red-700 hover:bg-white focus:outline-none focus:ring active:text-red-500 sm:w-auto'
						>
							MORE ABOUT US
						</a>
					</div>
				</div>
			</div>
			<div className='flex md:hidden'>
				{" "}
				<MobileAboutUs />
			</div>
		</>
	);
};

export default About;
