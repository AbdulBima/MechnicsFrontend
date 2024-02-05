import MobileLanding from "../mobileCom/MobileLanding";

const Landing = () => {
	return (
		<>
			<div className='hidden md:flex'>
				<div className="relative h-[90vh] w-full bg-[url('/images/redcar.jpg')] bg-cover bg-left md:bg-center bg-no-repeat">
					<div className='absolute top-0 left-0 w-full h-full bg-black opacity-10'></div>
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>

					<div className='flex flex-col z-10 md:absolute  md:bottom-20 md:left-16 text-white'>
						<div>
							<span className='md:brandtitle text-red-600 opacity-90'>
								CAR REPAIR
							</span>
						</div>
						<div className='mt-3'>
							<h1 className='bxti pr-5 text-blue-400 md:text-white mr-0 md:pr-80 md:mr-80'>
								MAINTENANCE, SERVICING, &
								REPAIR OF AUTOMOBILES
							</h1>
						</div>

						<div className='mt-2 opacity-90'>
							<h2 className='deskPara text-left pr-5 mr-5 md:pr-96 md:mr-96'>
								Dedicated to providing
								expert maintenance,
								servicing, and repair for
								your vehicle. Our commitment
								ensures your car runs
								smoothly, so you can drive
								with confidence.
							</h2>
						</div>
						<div className='mt-8 flex flex-wrap gap-4 text-center'>
							<a
								href='/contact'
								className='block w-full  bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
							>
								SCHEDULE AN APPOINTMENT
							</a>

							<a
								href='/services'
								className='block w-full  bg-transparent px-12 py-3 border border-white text-sm font-medium text-white shadow hover:text-red-700 hover:bg-white focus:outline-none focus:ring active:text-red-500 sm:w-auto'
							>
								BROWSE SERVICES
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='md:hidden flex'>
				<MobileLanding />
			</div>
		</>
	);
};

export default Landing;
