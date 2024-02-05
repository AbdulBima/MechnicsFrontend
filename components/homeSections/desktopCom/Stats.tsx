import React from "react";
import MobileStats from "../mobileCom/MobileStats";

const Stats = () => {
	return (
		<>
			<div className='hidden md:flex my-20'>
				<section className='bg-black'>
					<div className='flex flex-row w-[100vw] items-center justify-center space-x-10  md:divide-opacity-30'>
						<div className='flex flex-col px-4 py-8 text-center'>
							<div className='bxtISta order-last text-lg font-medium text-white'>
								YEARS OF SERVICE
							</div>

							<div className='text-4xl font-extrabold text-white md:text-5xl'>
								20
								<span className='text-red-600'>
									+
								</span>
							</div>
						</div>

						<div className='flex flex-col px-4 py-8 text-center'>
							<div className='bxtISta order-last text-lg font-medium text-white'>
								HAPPY CLIENTS
							</div>

							<div className='text-4xl font-extrabold text-white md:text-5xl'>
								60
								<span className='text-red-600'>
									K
								</span>
							</div>
						</div>

						<div className='flex flex-col px-4 py-8 text-center'>
							<div className='bxtISta order-last text-lg font-medium text-white'>
								CUSTOMER SATISFACTION
							</div>

							<div className='text-4xl font-extrabold text-white md:text-5xl'>
								99
								<span className='text-red-600'>
									%
								</span>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className='flex md:hidden'>
				<MobileStats />
			</div>
		</>
	);
};

export default Stats;
