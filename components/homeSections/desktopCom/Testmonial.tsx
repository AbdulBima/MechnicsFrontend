import React from "react";
import MobileTestmonial from "../mobileCom/MobileTestmonial";
import Image from "next/image";

const Testmonial = () => {
	return (
		<div>
			<section className='hidden md:flex bg-black'>
				<div className='mx-auto max-w-full px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
					<div className='md:flex md:items-end md:justify-between lg:px-10'>
						<div className='max-w-xl'>
							<h2 className='brandtitle uppercase text-red-600'>
								testmonials
							</h2>
							<h2 className='bxti mt-4 uppercase tracking-tight text-white sm:text-5xl'>
								Read trusted reviews from
								our customers
							</h2>
						</div>

						<a
							href='#'
							className='block w-full  bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
						>
							SCHEDULE AN APPOINTMENT
						</a>
					</div>

					<section className='py-8 bg-black sm:py-10'>
						<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
							<ul
								role='list'
								className='grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 lg:max-w-none lg:flex lg:flex-row'
							>
								<li>
									<ul
										role='list'
										className='flex flex-row gap-x-6 sm:gap-y-8 border border-white'
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
												<figcaption className='relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100'>
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
															src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80'
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
										className='flex flex-row gap-x-6 sm:gap-y-8 border border-white'
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
												<figcaption className='relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100'>
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
															src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80'
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
										className='flex flex-row gap-x-6 sm:gap-y-8 border border-white'
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
														I'm
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
														work
													</p>
												</blockquote>
												<figcaption className='relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100'>
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
															src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80'
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

			<MobileTestmonial />
		</div>
	);
};

export default Testmonial;
