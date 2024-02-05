import React from "react";

const ParentElement = () => {
	return (
		<div className="md:hidden relative flex flex-col items-start h-[90vh] w-full bg-[url('/images/redcar.jpg')] bg-cover bg-left bg-no-repeat">
			<div className='absolute top-0 left-0 w-full h-full bg-black opacity-10'></div>
			<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
			<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>

			<div className='flex-none absolute left-5 top-36'>
				<span className='brandtitleM text-xl text-red-600 '>
					CAR REPAIR
				</span>
			</div>

			<div className=' absolute top-48  left-5 pr-10'>
				<h1 className='bxtiM leading-none mr-4 text-white'>
					MAINTENANCE, SERVICING, & REPAIR OF
					AUTOMOBILES
				</h1>
			</div>

			<div className='flex-none absolute top-80 left-5 pr-8'>
				<h2 className='desbkPara  text-white  text-left '>
					Dedicated to providing expert
					maintenance, servicing, and repair for
					your vehicle.
				</h2>
			</div>

			<div className='flex-none absolute bottom-48 left-8 right-6 '>
				<div className='flex flex-col space-y-4'>
					<div className='flex'>
						{" "}
						<a
							href='/contact'
							className='buttonS w-full text-center bg-red-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
						>
							SCHEDULE AN APPOINTMENT
						</a>{" "}
					</div>

					<div className='flex'>
						<a
							href='/services'
							className='buttonS w-full text-center bg-transparent px-14 py-3 border border-white text-sm font-medium text-white shadow hover:text-red-700 hover:bg-white focus:outline-none focus:ring active:text-red-500 sm:w-auto'
						>
							BROWSE SERVICES
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParentElement;
