"use client";
import { useRef } from "react";
import {
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import MobilePackages from "../mobileCom/MobilePackages";
import Image from "next/image";

const Packages = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(
		scrollYProgress,
		[0, 1],
		[0.8, 1]
	);
	const opacityProgress = useTransform(
		scrollYProgress,
		[0, 1],
		[0.6, 1]
	);
	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
		>
			<div className='hidden md:flex md:flex-col md:space-y-8 bg-black px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20'>
				<div className='md:flex md:items-end md:justify-between lg:px-10 lg:pb-16'>
					<div className='max-w-xl'>
						<h2 className='brandtitle uppercase text-red-600'>
							packages
						</h2>
						<h2 className='bxti uppercase mt-4 tracking-tight text-white sm:text-5xl'>
							DIVERSE CAR PACKAGES TO SUIT
							EVERY VEHICLE
						</h2>
					</div>

					<p className='mt-16 max-w-lg leading-relaxed text-white'>
						Explore our tailored packages
						designed to meet the unique needs of
						every car. From compact cars to
						SUVs, we've got you covered with
						comprehensive services to keep your
						vehicle in peak condition.
					</p>
				</div>

				<div className='grid max-w-md gap-10 row-gap-8 lg:max-w-full sm:row-gap-10 lg:grid-cols-3 xl:max-w-full sm:mx-auto lg:px-10'>
					<div className='flex flex-col transition duration-300 bg-white  shadow-sm hover:shadow'>
						<div className='relative w-full h-48'>
							<Image
								src='/images/car20.jpg'
								className='object-cover w-full h-full border-l border-opacity-20 border-x border-t border-white'
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
									OIL CHANGE, TUNE UPS,
									GENERAL REPAIRS, ENGINE
									SERVICE, COMPUTER
									DIAGNOSTICS
								</p>
								<div className='mt-1 mb-4 mr-1 text-4xl text-white font-bold sm:text-5xl'>
									$12
								</div>
							</div>
							<div
								// onClick={handleModalToggle}
								className='inline-flex items-center justify-center uppercase w-full h-12 px-6 border border-white border-opacity-40  font-medium tracking-wide text-white transition duration-200 hover:-translate-y-2 shadow-md bg-deep-purple-accent-400 hover:bg-white hover:text-black  focus:shadow-outline focus:outline-none'
							>
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
									OIL CHANGE, TUNE UPS,
									GENERAL REPAIRS, ENGINE
									SERVICE, COMPUTER
									DIAGNOSTICS
								</p>
								<div className='mt-1 mb-4 mr-1 text-4xl text-white font-bold sm:text-5xl'>
									$250
								</div>
							</div>
							<div
								// onClick={handleModalToggle}
								className='inline-flex items-center uppercase justify-center w-full h-12 px-6  font-medium tracking-wide text-white transition duration-200 hover:-translate-y-2 shadow-md bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none'
							>
								<a href='/checkout'>
									Buy Professional
								</a>
							</div>
						</div>
					</div>

					<div className='flex flex-col transition duration-300 bg-white  shadow-sm hover:shadow'>
						<div className='relative w-full h-48'>
							<Image
								src='/images/car4.jpg'
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
									OIL CHANGE, TUNE UPS,
									GENERAL REPAIRS, ENGINE
									SERVICE, COMPUTER
									DIAGNOSTICS
								</p>
								<div className='mt-1 mb-4 mr-1 text-4xl text-white font-bold sm:text-5xl'>
									$12
								</div>
							</div>
							<div
								// onClick={handleModalToggle}
								className='inline-flex items-center uppercase justify-center w-full h-12 px-6 border border-white border-opacity-40  font-medium tracking-wide text-white transition duration-200 hover:-translate-y-2 shadow-md bg-deep-purple-accent-400 hover:bg-white hover:text-black  focus:shadow-outline focus:outline-none'
							>
								<a href='/checkout'>
									Buy Deluxe
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<MobilePackages />
		</motion.div>
	);
};

export default Packages;
