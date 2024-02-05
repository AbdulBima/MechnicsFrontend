import React from "react";

import MobileWhyUs from "../mobileCom/MobileWhyUs";
import Image from "next/image";

const WhyUs = () => {
	return (
		<>
			<div className='hidden relative overflow-hidden bg-black border-b border-t border-red-600 md:flex md:border-b lg:min-h-screen'>
				<div className='relative flex flex-col px-8 py-24 lg:flex-1 md:justify-center lg:py-8 md:flex-none md:px-24'>
					<div className='absolute bottom-40 left-16 text-white'>
						<div>
							<span className='brandtitle text-red-600 '>
								WHY US
							</span>
						</div>
						<div className='mt-3'>
							<h1 className='bxti pr-20 mr-20'>
								What sets us apart?
							</h1>
						</div>
						<div className='mt-2 '>
							<h2 className='deskPara text-left text-lg text-white mr-40'>
								What sets us apart is our
								unwavering commitment to
								customer satisfaction, our
								team of skilled technicians,
								and our advanced diagnostic
								tools. We prioritize
								transparency and honesty,
								ensuring our clients feel
								confident in our services.
								Additionally, our dedication
								to staying abreast of the
								latest automotive
								advancements enables us to
								provide efficient and
								reliable repairs, keeping
								vehicles running smoothly
								for the long haul.
							</h2>
						</div>

						<div className='mt-8 flex flex-wrap gap-4 text-center'>
							<a
								href='/contact'
								className='block w-full  bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
							>
								SCHEDULE AN APPOINTMENT
							</a>
						</div>
					</div>
				</div>
				<div className='relative flex-1 hidden w-0 border-red-600 lg:block lg:border-l'>
					<Image
						className='absolute inset-0 object-cover object-center w-full h-full bg-neutral-200'
						src='/images/car3.jpg'
						alt=''
						width='1310'
						height='873'
					/>
				</div>
			</div>
			<div className='flex md:hidden'>
				<MobileWhyUs />
			</div>
		</>
	);
};

export default WhyUs;
