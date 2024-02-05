import Image from "next/image";
import React from "react";

const MobileTeam = () => {
	return (
		<div className='flex md:hidden mt-10 flex-col w-full justify-center items-center space-y-6 bg-black'>
			<div>
				{" "}
				<h2 className='brandtitleM uppercase text-red-600'>
					team
				</h2>
			</div>

			<div>
				{" "}
				<p className='bxtiM leading-6 uppercase text-white text-center px-4'>
					Our talented team of professionals
				</p>
			</div>

			<div className='pt-6'>
				{" "}
				<a
					href='#'
					className='buttonS w-full uppercase text-center bg-transparent  px-14 py-3 border border-white text-sm font-medium text-white shadow hover:text-red-700 hover:bg-white focus:outline-none focus:ring active:text-red-500 sm:w-auto'
				>
					join our team
				</a>
			</div>

			<div className='flex flex-col w-96 pt-10 space-y-10 items-center  bg-black'>
				<div className=''>
					<div className='relative transition duration-300 transform shadow-lg  hover:shadow-2xl'>
						<Image
							className='object-cover w-11/12 mx-auto h-96 hover:translate hover:scale-110'
							src='/images/faces/f1.jpg'
							alt='Person'
							width='96'
							height='96'
						/>
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>

						<div className='absolute inset-0 flex flex-col top-60 px-5 py-4 text-center '>
							<p className='bxtiM uppercase mb-1 text-lg font-bold text-gray-100'>
								Mansa Musa
							</p>
							<p className='brandtitleM  uppercase mb-4 text-xs text-gray-100'>
								Chief Engineer
							</p>

							<div className='flex items-center justify-center space-x-3'>
								<a
									href='/'
									className='text-white transition-colors duration-300 hover:text-teal-accent-400'
								>
									<svg
										viewBox='0 0 24 24'
										fill='currentColor'
										className='h-5'
									>
										<path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className=''>
					<div className='relative overflow-hidden transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
						<Image
							className='object-cover w-11/12 mx-auto h-96 hover:translate hover:scale-110'
							src='/images/faces/f2.jpg'
							alt='Person'
							width='96'
							height='96'
						/>
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>

						<div className='absolute inset-0 flex flex-col top-60 px-5 py-4 text-center '>
							<p className='bxtiM uppercase mb-1 text-lg font-bold text-gray-100'>
								Yuji Itadori
							</p>
							<p className='brandtitleM uppercase mb-4 text-xs text-gray-100'>
								Engineer
							</p>

							<div className='flex items-center justify-center space-x-3'>
								<a
									href='/'
									className='text-white transition-colors duration-300 hover:text-teal-accent-400'
								>
									<svg
										viewBox='0 0 24 24'
										fill='currentColor'
										className='h-5'
									>
										<path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className=''>
					<div className='relative overflow-hidden transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
						<Image
							className='object-cover w-11/12 mx-auto h-96 hover:translate hover:scale-110'
							src='/images/faces/f4.jpg'
							alt='Person'
							width='96'
							height='96'
						/>
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>

						<div className='absolute inset-0 flex flex-col top-60 px-5 py-4 text-center '>
							<p className='bxtiM uppercase mb-1 text-lg font-bold text-gray-100'>
								Fushigoro San
							</p>
							<p className='brandtitleM uppercase mb-4 text-xs text-gray-100'>
								Engineer
							</p>

							<div className='flex items-center justify-center space-x-3'>
								<a
									href='/'
									className='text-white transition-colors duration-300 hover:text-teal-accent-400'
								>
									<svg
										viewBox='0 0 24 24'
										fill='currentColor'
										className='h-5'
									>
										<path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileTeam;
