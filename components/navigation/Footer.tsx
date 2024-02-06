

import React from "react";

const Footer = () => {
	return (
		<footer className=' bg-black mt-20'>
			<div className='px-4  border-t border-opacity-30 py-8 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8'>
				<p className='mt-8 text-center'>
					<span className='deskPara mx-auto mt-2 text-sm text-white opacity-70'>
						Copyright © 2024
						<a
							href='https://unwrapped.design'
							className='mx-2 text-blue-500 hover:text-gray-500'
							rel='noopener noreferrer'
						>
							@BIMADEV
						</a>
						Since 2020
					</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
