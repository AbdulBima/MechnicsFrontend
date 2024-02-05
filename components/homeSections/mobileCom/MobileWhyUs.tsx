import React from "react";

const MobileWhyUs = () => {
	return (
		<>
			<div className="md:hidden mt-20 relative flex flex-col items-start h-[90vh] w-full bg-[url('/images/car3.jpg')] bg-cover bg-left bg-no-repeat">
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r  from-black to-transparent'></div>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t  from-black to-transparent'></div>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-black to-transparent'></div>

				<div className='flex-none absolute left-5 top-44'>
					<span className='brandtitleM  text-red-600 '>
						WHY US
					</span>
				</div>

				<div className=' absolute top-56  left-5 pr-10'>
					<h1 className='bxtiM uppercase leading-none mr-4 text-white'>
						What sets us apart?
					</h1>
				</div>

				<div className='flex-none absolute top-72 left-5 pr-8'>
					<h2 className='desbkPara  text-white  text-left '>
						What sets us apart is our unwavering
						commitment to customer satisfaction,
						our team of skilled technicians, and
						our advanced diagnostic tools. We
						prioritize transparency and honesty,
						ensuring our clients feel confident
						in our services. Additionally, our
						dedication to staying abreast of the
						latest automotive advancements
						enables us to provide efficient and
						reliable repairs, keeping vehicles
						running smoothly for the long haul.
					</h2>
				</div>

				<div className='flex-none absolute bottom-28 left-8 right-6 '>
					<div className='flex flex-col space-y-4'>
						<div className='flex'>
							{" "}
							<a
								href='/contact'
								className='buttonS w-full text-center shadow-lg bg-red-600 px-8 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
							>
								SCHEDULE AN APPOINTMENT
							</a>{" "}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileWhyUs;
