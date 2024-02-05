import React from "react";

const MobileAboutUs = () => {
	return (
		<div className='flex md:hidden mt-20 flex-col w-full h-[60vh] items-center space-y-6 bg-black'>
			<div>
				<h2 className='brandtitleM  text-red-600'>
					ABOUT US
				</h2>
			</div>
			<div>
				<p className='bxtiM leading-6 text-white text-center'>
					THE JOURNEY BEHIND OUR AUTO SERVICE
					CENTER
				</p>
			</div>
			<div>
				<p className=' text-white  px-4 opacity-100 text-center '>
					At our workshop, we pride ourselves on a
					rich history of providing exceptional
					automotive services. With a commitment
					to customer satisfaction, our skilled
					team of technicians ensures your vehicle
					receives top-notch care.
				</p>
			</div>

			<div className='pt-6'>
				<a
					href='#'
					className='buttonS w-full text-center bg-transparent  px-14 py-3 border border-white text-sm font-medium text-white shadow hover:text-red-700 hover:bg-white focus:outline-none focus:ring active:text-red-500 sm:w-auto'
				>
					MORE ABOUT US
				</a>
			</div>
		</div>
	);
};

export default MobileAboutUs;
