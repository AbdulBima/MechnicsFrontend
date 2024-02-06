import Image from "next/image";
import React from "react";

const MobileTestmonial = () => {
	return (
		<div>
			<section className='flex md:hidden bg-black'>
				<div className='mx-auto max-w-full px-4 py-12 sm:px-6 '>
					<div className='flex flex-col items-center space-y-8'>
						<div>
							{" "}
							<h2 className='brandtitleM uppercase text-red-600'>
								testmonials
							</h2>
						</div>
						<div>
							{" "}
							<p className='bxtiM uppercase leading-6 text-white -mt-4 text-center'>
								Read trusted reviews from
								our customers
							</p>
						</div>

						<div className='pt-6'>
							<a
								href='/contact'
								className='buttonS w-full text-center bg-red-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
							>
								SCHEDULE AN APPOINTMENT
							</a>
						</div>
					</div>

					<section className='py-8 bg-black sm:py-10'>
						<div className='px-4 mx-auto max-w-7xl sm:px-6 '>
							<ul
								role='list'
								className='grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 '
							>
								<li>
									<ul
										role='list'
										className='flex flex-row gap-x-6 sm:gap-y-8 border border-white border-opacity-30'
									>
										<li>
											<figure className='relative h-full p-6 bg-black rounded-3xl'>
												<blockquote className='relative'>
													<p className='text-base text-white'>
														Professionalism
														and
														efficiency
														define
														this
														auto
														service
														center.
														From
														diagnostics
														to
														repairs,
														they
														handled
														everything
														with
														precision.
														My
														car
														is
														running
														smoothly,
														and
														I&apos;m
														impressed
														with
														their
														dedication
														to
														customer
														satisfaction
													</p>
												</blockquote>
												<figcaption className='relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100 border-opacity-40'>
													<div>
														<div className='text-base text-white'>
															Gojo
															Satoru
														</div>
														<div className='mt-1 text-sm text-white'>
															CEO
															at
															JJK
														</div>
													</div>
													<div className='overflow-hidden rounded-full bg-gray-50'>
														<Image
															alt=''
															src='/images/redcar.jpg'
															width='56'
															height='56'
															decoding='async'
															data-nimg='future'
															className='object-cover h-14 w-14'
															loading='lazy'
														/>
													</div>
												</figcaption>
											</figure>
										</li>
									</ul>
								</li>

								<li>
									<ul
										role='list'
										className='flex flex-row gap-x-6 sm:gap-y-8 border border-white border-opacity-30'
									>
										<li>
											<figure className='relative h-full p-6 bg-black rounded-3xl'>
												<blockquote className='relative'>
													<p className='text-base text-white'>
														I
														took
														my
														car
														to
														their
														workshop,
														and
														the
														service
														was
														exceptional!
														The
														team
														was
														quick,
														efficient,
														and
														transparent.
														I
														highly
														recommend
														them
														for
														all
														your
														automotive
														needs
													</p>
												</blockquote>
												<figcaption className='relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100 border-opacity-40'>
													<div>
														<div className='text-base text-white'>
															Megumi
															Fushi
														</div>
														<div className='mt-1 text-sm text-white'>
															CEO
															at
															RunAway
															LLC
														</div>
													</div>
													<div className='overflow-hidden rounded-full bg-gray-50'>
														<Image
															alt=''
															src='/images/redcar.jpg'
															width='56'
															height='56'
															decoding='async'
															data-nimg='future'
															className='object-cover h-14 w-14'
															loading='lazy'
														/>
													</div>
												</figcaption>
											</figure>
										</li>
									</ul>
								</li>

								<li>
									<ul
										role='list'
										className='flex flex-row gap-x-6 sm:gap-y-8 border border-white border-opacity-30'
									>
										<li>
											<figure className='relative h-full p-6 bg-black rounded-3xl'>
												<blockquote className='relative'>
													<p className='text-base text-white'>
														Finding
														a
														reliable
														auto
														repair
														service
														is
														crucial,
														and
														I&apos;m
														glad
														I
														found
														them.
														The
														team
														is
														trustworthy,
														and
														they
														go
														the
														extra
														mile
														to
														ensure
														your
														vehicle
														is
														in
														top-notch
														condition.
														Excellent
														work!
													</p>
												</blockquote>
												<figcaption className='relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100 border-opacity-40'>
													<div>
														<div className='text-base text-white'>
															Mei
															Mei
														</div>
														<div className='mt-1 text-sm text-white'>
															MoneyTeam
														</div>
													</div>
													<div className='overflow-hidden rounded-full bg-gray-50'>
														<Image
															alt=''
															src='/images/redcar.jpg'
															width='56'
															height='56'
															decoding='async'
															data-nimg='future'
															className='object-cover h-14 w-14'
															loading='lazy'
														/>
													</div>
												</figcaption>
											</figure>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</section>
				</div>
			</section>
		</div>
	);
};

export default MobileTestmonial;
