import React from "react";

const MobileStats = () => {
	return (
		<>
			<section className=' w-[100vw] bg-black flex flex-col items-center'>
				<div className='flex flex-col px-4 py-4 text-center border-b border-white border-opactiy-20'>
					<div className='servCardHeadM order-last  font-medium text-white'>
						YEARS OF SERVICE
					</div>

					<div className='text-4xl font-extrabold text-white md:text-5xl'>
						20
						<span className='text-red-600'>
							+
						</span>
					</div>
				</div>

				<div className='flex flex-col px-4 py-8 text-center border-b border-white border-opactiy-20 '>
					<div className='servCardHeadM order-last  font-medium text-white'>
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
					<div className='servCardHeadM order-last  font-medium text-white'>
						CUSTOMER SATISFACTION
					</div>

					<div className='text-4xl font-extrabold text-white md:text-5xl'>
						99
						<span className='text-red-600'>
							%
						</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default MobileStats;
