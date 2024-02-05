import React from "react";
import MobileVisit from "../mobileCom/MobileVisit";
import Image from "next/image";

const Visit = () => {
	return (
		<div>
			<div className='hidden md:flex md:flex-col  space-y-10 bg-black  px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20'>
				<div className='flex flex-col items-center justify-center  bg-black'>
					<h2 className='brandtitle  text-red-600'>
						LOCATION
					</h2>

					<p className='bxti hidden line leading-none uppercase px-80 text-white text-center md:mt-4 md:block'>
						Discover our auto workshop near you
					</p>

					<p className=' hidden text-white opacity-100 text-center px-96 md:mt-4 md:block'>
						Bringing reliable car repair
						services closer to you for unmatched
						convenience & efficiency.
					</p>
				</div>

				<div className='px-20 '>
					<div className='relative flex flex-col-reverse py-8 lg:py-0 lg:flex-col border border-white border-opacity-30'>
						<div className='w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-10 lg:max-w-full'>
							<div className='mb-0 lg:max-w-lg lg:pr-8 xl:pr-6'>
								<div>
									<div className='max-w-full mx-auto rounded-lg overflow-hidden'>
										<div className='px-6 py-6'>
											<p className='bxti mt-1 leading-none text-white uppercase'>
												shibuya
												Minna,
												Nigeria
											</p>
										</div>
										<div className=' px-6 py-8'>
											<p className='mt-1 text-white'>
												Monday -
												Friday: 9am
												- 5pm
											</p>
											<p className='mt-1 text-white'>
												Saturday:
												10am - 4pm
											</p>
											<p className='mt-1 text-white'>
												Sunday:
												Closed
											</p>
										</div>
										<div className=' px-6 pt-6'>
											<div className='flex flex-row space-x-4'>
												<svg
													width={
														30
													}
													height={
														30
													}
													viewBox='0 0 512 512'
													xmlSpace='http://www.w3.org/2000/svg'
												>
													<path
														d='M256 54.872c-83.352 0-151.162 67.811-151.162 151.162 0 134.032 136.018 239.518 141.809 243.945l9.354 7.148 9.348-7.148c5.791-4.428 141.814-109.913 141.814-243.945-.001-83.352-67.81-151.162-151.163-151.162zm-.011 362.891c-29.792-25.637-120.352-111.815-120.352-211.729 0-66.37 53.987-120.363 120.363-120.363 66.364 0 120.363 53.994 120.363 120.363.001 99.7-90.595 186.052-120.374 211.729z'
														fill='#b21807'
													/>
													<path
														d='M253.665 271.729c-38.672 0-70.135-31.459-70.135-70.129 0-38.672 31.462-70.135 70.135-70.135 38.672 0 70.134 31.462 70.134 70.135 0 38.67-31.462 70.129-70.134 70.129zm0-117.263c-25.99 0-47.135 21.145-47.135 47.135 0 25.987 21.145 47.129 47.135 47.129 25.989 0 47.134-21.142 47.134-47.129 0-25.991-21.144-47.135-47.134-47.135z'
														fill='#ffffff'
													/>
												</svg>{" "}
												<p className='mt-1 uppercase text-white'>
													no. 24,
													JJK,
													tokyo
													branch
												</p>
											</div>
										</div>
										<div className=' px-6 pt-2'>
											<div className='flex flex-row space-x-4'>
												<svg
													width={
														26
													}
													height={
														26
													}
													data-name='Layer 1'
													viewBox='0 0 100 100'
													xmlSpace='http://www.w3.org/2000/svg'
												>
													<path
														d='M93.14 70.13 83 59.94a6.33 6.33 0 0 0-8.95 0l-10.6 10.55-33.94-33.94L40.07 26a6.33 6.33 0 0 0 0-8.94L29.87 6.85a6.33 6.33 0 0 0-8.95 0L6.85 20.92A6.32 6.32 0 0 0 5 25.39v1.75c.17 5.15 2.49 11.73 6.75 19.08a117.51 117.51 0 0 0 18.5 23.53 117.65 117.65 0 0 0 23.43 18.44C61 92.45 67.58 94.78 72.74 95h1.87a6.31 6.31 0 0 0 4.45-1.83l14.09-14.09a6.33 6.33 0 0 0 0-8.93Zm-2 7L77.08 91.17a3.54 3.54 0 0 1-1.28.81 3.5 3.5 0 0 1-1.2.21h-1.76C68.15 92 62 89.77 55.1 85.76a114.81 114.81 0 0 1-22.85-18 114.67 114.67 0 0 1-18-22.94c-4-6.94-6.22-13.08-6.37-17.77v-1.66A3.51 3.51 0 0 1 8 24.2a3.57 3.57 0 0 1 .82-1.29L22.9 8.84a3.52 3.52 0 0 1 5 0L38.07 19a3.52 3.52 0 0 1 0 5L27.52 34.56l-2 2 2 2 33.94 33.92 2 2 2-2L76 61.93a3.51 3.51 0 0 1 5 0l10.16 10.19a3.52 3.52 0 0 1 0 5Z'
														fill='#ffffff'
													/>
												</svg>
												<p className='mt-1 uppercase text-white'>
													(+234)
													789 -
													544
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0'>
							<Image
								className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full'
								src='/images/workshop.jpg'
								alt=''
								width='1310'
								height='873'
							/>
						</div>
					</div>
				</div>
			</div>
			<MobileVisit />
		</div>
	);
};

export default Visit;
