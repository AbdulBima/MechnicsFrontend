import Image from "next/image";
import React from "react";

const MobileServices = () => {
	return (
		<>
			<div className='w-[100vw] mt-20 bg-black'>
				<div className='flex flex-col items-center w-[100vw]'>
					<div className='flex flex-col items-center '>
						<p className='servCardHeadM text-red-600 font-semibold tracking-wide uppercase'>
							SERVICES
						</p>
						<p className='servCardHeadM leading-6 p-6 -mt-2 uppercase text-center text-base/10 text-white'>
							We provide an extensive array of
							automotive services
						</p>
					</div>

					<div className='carousel carousel-center max-w-md p-4 ml-16 space-x-10 bg-nblack'>
						<div className='carousel-item'>
							<div className='border w-80 mx-auto border-white border-opacity-40'>
								<Image
									className='object-cover w-full h-64 mb-6 '
									src='/images/car4.jpg'
									alt=''
									width='64'
									height='64'
								/>
								<h5 className=' servCardHeadM ml-6 uppercase text-white mb-2  font-bold leading-none sm:text-2xl'>
									Diagnostics
								</h5>
								<p className=' text-white mx-6 mb-10 opacity-80'>
									Swiftly identify and
									resolve issues with our
									advanced diagnostic
									tools, ensuring your car
									runs smoothly.
								</p>
							</div>
						</div>
						<div className='carousel-item'>
							<div className='border w-80 mx-auto border-white border-opacity-40'>
								<Image
									className='object-cover w-full h-64 mb-6 '
									src='/images/redcar.jpg'
									alt=''
									width='80'
									height='64'
								/>
								<h5 className=' servCardHeadM ml-6 uppercase text-white mb-2 font-bold leading-none sm:text-2xl'>
									Repairs
								</h5>
								<p className='text-white mx-6 mb-10 opacity-80'>
									Trust us for precise
									engine and brake
									repairs, restoring your
									vehicle to peak
									performance.
								</p>
							</div>
						</div>
						<div className='carousel-item'>
							<div className='border w-80 mx-auto border-white border-opacity-40'>
								<Image
									className='object-cover w-full h-64 mb-6 '
									src='/images/workshop.jpg'
									alt=''
									width='1310'
									height='64'
								/>
								<h5 className=' servCardHeadM ml-6 uppercase text-white mb-2 text-xl font-bold leading-none sm:text-2xl'>
									Maintenance
								</h5>
								<p className='text-white mx-6 mb-10 opacity-80'>
									Maximize your car's
									lifespan with our
									hassle-free maintenance
									services, covering
									everything from oil
									changes to tire care.
								</p>
							</div>
						</div>
					</div>

					<div className='flex flex-col space-y-4 mt-10'>
						<div className='flex'>
							<a
								href='#'
								className='buttonS w-full text-center bg-red-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
							>
								SCHEDULE AN APPOINTMENT
							</a>
						</div>

						<div className='flex'>
							<a
								href='#'
								className='buttonS w-full text-center bg-transparent px-14 py-3 border border-white text-sm font-medium text-white shadow hover:text-red-700 hover:bg-white focus:outline-none focus:ring active:text-red-500 sm:w-auto'
							>
								BROWSE SERVICES
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileServices;
