import React from "react";

const MobileVisit = () => {
	return (
		<div>
			<div className='flex flex-col space-y-10 md:hidden relative mt-20 bg-black w-full h-56'>
				<div className='absolute left-10 top-4 '>
					<h2 className='bxtiM  text-white underline underline-offset-4 decoration-4 decoration-red-600'>
						CONTACT
					</h2>
				</div>
				<div className='absolute uppercase left-10 top-12'>
					<p className='brandtitleM mt-1 uppercase text-white'>
						(+234) 789 - 544
					</p>
				</div>
				<div className='brandtitleM text-white absolute left-10 top-24'>
					<div className=''>
						{" "}
						MECHANICS@GMAIL.COM{" "}
					</div>
				</div>
				<div className='absolute left-10 top-36'>
					<p className='brandtitleM uppercase text-white '>
						no. 24, JJK, tokyo branch
					</p>
				</div>
			</div>
		</div>
	);
};

export default MobileVisit;
