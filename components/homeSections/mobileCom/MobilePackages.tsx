import Image from "next/image";
import React, { useState } from "react";

const MobilePackages = () => {
	return (
		<div>
			<div className='flex md:hidden mt-20'>
				<div className='flex flex-col items-center w-96 mx-auto space-y-6 '>
					<div>
						{" "}
						<h2 className='brandtitleM  text-red-600'>
							PACKAGES
						</h2>
					</div>
					<div>
						{" "}
						<p className='bxtiM leading-6 text-white text-center'>
							DIVERSE CAR PACKAGES TO SUIT
							EVERY VEHICLE
						</p>
					</div>
					<div>
						<p className=' text-white  px-4 opacity-100 text-center '>
							Explore our tailored packages
							designed to meet the unique
							needs of every car.
						</p>
					</div>

					<div className='grid max-w-md gap-10 row-gap-8 lg:max-w-full sm:row-gap-10 lg:grid-cols-3 xl:max-w-full sm:mx-auto lg:px-10'>
						<div className='flex flex-col transition duration-300 bg-white  shadow-sm hover:shadow'>
							<div className='relative w-full h-48'>
								<Image
									src='/images/car20.jpg'
									className='object-cover w-full h-full border-l border-opacity-20 border-r border-t border-white'
									alt='Plan'
									width='1310'
									height='873'
								/>
							</div>
							<div className='flex flex-col space-y-10 bg-black justify-between flex-grow p-8 border border-opacity-30 border-white border-t-0 '>
								<div className='flex flex-col space-y-4'>
									<div className='brandtitle text-lg text-white font-semibold'>
										STARTER
									</div>
									<p className='text-sm text-white opacity-80 '>
										OIL CHANGE, TUNE
										UPS, GENERAL
										REPAIRS, ENGINE
										SERVICE, COMPUTER
										DIAGNOSTICS
									</p>
									<div className='mt-1 mb-4 mr-1 text-4xl text-white font-bold sm:text-5xl'>
										$12
									</div>
								</div>
								<div className='inline-flex items-center justify-center uppercase w-full h-12 px-6 border border-white border-opacity-40  font-medium tracking-wide text-white transition duration-200 hover:-translate-y-2 shadow-md bg-deep-purple-accent-400 hover:bg-white hover:text-black  focus:shadow-outline focus:outline-none'>
									<a href='/checkout'>
										Buy Starter
									</a>
								</div>
							</div>
						</div>

						<div className='flex flex-col transition duration-300 bg-white  shadow-sm hover:shadow'>
							<div className='relative w-full h-48'>
								<Image
									src='/images/car7.jpg'
									className='object-cover w-full h-full border-l border-opacity-20 border-x border-t border-white'
									alt='Plan'
									width='1310'
									height='873'
								/>
							</div>
							<div className='flex flex-col space-y-10 bg-black justify-between flex-grow p-8 border border-opacity-30 border-white border-t-0 '>
								<div className='flex flex-col space-y-4'>
									<div className='brandtitle text-lg text-white font-semibold'>
										PROFESSIONAL
									</div>
									<p className='text-sm text-white opacity-80 '>
										OIL CHANGE, TUNE
										UPS, GENERAL
										REPAIRS, ENGINE
										SERVICE, COMPUTER
										DIAGNOSTICS
									</p>
									<div className='mt-1 mb-4 mr-1 text-4xl text-white font-bold sm:text-5xl'>
										$250
									</div>
								</div>
								<div className='inline-flex items-center uppercase justify-center w-full h-12 px-6  font-medium tracking-wide text-white transition duration-200 hover:-translate-y-2 shadow-md bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none'>
									<a href='/checkout'>
										Buy Professional
									</a>
								</div>
							</div>
						</div>

						<div className='flex flex-col transition duration-300 bg-white  shadow-sm hover:shadow'>
							<div className='relative w-full h-48'>
								<Image
									src='/images/car18.jpg'
									className='object-cover w-full h-full border-l border-opacity-20 border-x border-t border-white'
									alt='Plan'
									width='1310'
									height='873'
								/>
							</div>
							<div className='flex flex-col space-y-10 bg-black justify-between flex-grow p-8 border border-opacity-30 border-white border-t-0 '>
								<div className='flex flex-col space-y-4'>
									<div className='brandtitle text-lg text-white font-semibold'>
										DELUXE
									</div>
									<p className='text-sm text-white opacity-80 '>
										OIL CHANGE, TUNE
										UPS, GENERAL
										REPAIRS, ENGINE
										SERVICE, COMPUTER
										DIAGNOSTICS
									</p>
									<div className='mt-1 mb-4 mr-1 text-4xl text-white font-bold sm:text-5xl'>
										$12
									</div>
								</div>
								<div className='inline-flex items-center uppercase justify-center w-full h-12 px-6 border border-white border-opacity-40  font-medium tracking-wide text-white transition duration-200 hover:-translate-y-2 shadow-md bg-deep-purple-accent-400 hover:bg-white hover:text-black  focus:shadow-outline focus:outline-none'>
									<a href='/checkout'>
										Buy Professional
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobilePackages;
