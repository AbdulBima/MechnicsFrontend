import React from "react";
import MobileServices from "../mobileCom/MobileServices";
import Image from "next/image";

const Services = () => {
	return (
		<>
			<div className='hidden md:flex'>
				<div className='w-[100vw] flex'>
					<div className='px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-20 lg:py-20 bg-black'>
						<div className='flex flex-col items-center  mx-40 mb-20'>
							<p className='brandtitle text-red-600 mb-1 font-semibold tracking-wide uppercase md:mb-2'>
								SERVICES{" "}
							</p>
							<p className='servHead uppercase text-center text-base/10 text-white'>
								We provide an extensive
								array of automotive services
							</p>
						</div>
						<div className='grid gap-6 row-gap-5 lg:grid-cols-3'>
							<div className='border border-white border-opacity-40'>
								<Image
									className='object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96'
									src='/images/car7.jpg'
									alt=''
									width='1310'
									height='96'
								/>
								<h5 className=' servCardHead ml-6 uppercase text-white mb-2  font-bold leading-none sm:text-2xl'>
									Diagnostics
								</h5>
								<p className=' text-white mx-6 mb-10'>
									Swiftly identify and
									resolve issues with our
									advanced diagnostic
									tools, ensuring your car
									runs smoothly.
								</p>
							</div>
							<div className='border border-white border-opacity-40'>
								<Image
									className='object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96'
									src='/images/car3.jpg'
									alt=''
									width='1310'
									height='96'
								/>
								<h5 className=' servCardHead ml-6 uppercase text-white mb-2 font-bold leading-none sm:text-2xl'>
									Repairs
								</h5>
								<p className='text-white mx-6 mb-10'>
									Trust us for precise
									engine and brake
									repairs, restoring your
									vehicle to peak
									performance.
								</p>
							</div>

							<div className='border border-white border-opacity-40'>
								<Image
									className='object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96'
									src='/images/car4.jpg'
									alt=''
									width='1310'
									height='873'
								/>
								<h5 className=' servCardHead ml-6 uppercase text-white mb-2 text-xl font-bold leading-none sm:text-2xl'>
									Maintenance
								</h5>
								<p className='text-white mx-6 mb-10'>
									Maximize your car&apos;s
									lifespan with our
									hassle-free maintenance
									services, covering
									everything from oil
									changes to tire care.
								</p>
							</div>
						</div>

						<div className='flex flex-row items-center space-x-6 ml-80 mt-20 mb-20'>
							<a
								href='/contact'
								className='block w-full  bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
							>
								SCHEDULE AN APPOINTMENT
							</a>

							<a
								href=''
								className='block w-full  bg-transparent px-12 py-3 border border-white text-sm font-medium text-white shadow hover:text-red-700 hover:bg-white focus:outline-none focus:ring active:text-red-500 sm:w-auto'
							>
								BROWSE SERVICES
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='flex md:hidden'>
				<MobileServices />
			</div>
		</>
	);
};

export default Services;
