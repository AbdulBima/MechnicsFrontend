import React from "react";

export const ProfessionalModal = () => {
	return (
		<div>
			<>
				<>
					<div className='fixed z-10 top-0 bg-black w-screen h-screen bg-opacity-80 blur-lg'></div>
					<div className=' fixed top-0 items-center justify-center flex w-screen z-50 bg-black bg-opacity-80'>
						<div className='w-full px-4 mb-4 lg:w-1/2'>
							<div className='p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-gray-50 md:p-8'>
								<h2 className='mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400'>
									Order created
									succesffully
								</h2>

								<div className='flex items-center mt-8 justify-between'>
									<button className='block w-full py-4 font-bold text-center text-gray-100 uppercase bg-red-600  hover:bg-red-800'>
										Cancel
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			</>
		</div>
	);
};
