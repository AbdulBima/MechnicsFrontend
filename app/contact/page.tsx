"use client";
import Visit from "@/components/homeSections/desktopCom/Visit";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [carManufacturer, setCarManufacturer] =
		useState("");
	const [carModel, setCarModel] = useState("");
	const [addMessage, setAddMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleNameChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setName(e.target.value);
	};

	const handlePhoneChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setPhone(e.target.value);
	};
	// Function to handle email input change
	const handleEmailChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setEmail(e.target.value);
	};

	const handleCarManufacturerChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setCarManufacturer(e.target.value);
	};

	const handleCarModelChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setCarModel(e.target.value);
	};
	// Function to handle email input change
	const handleAddMessageChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setAddMessage(e.target.value);
	};

	const initiatePayment = async () => {
		setIsLoading(true);

		try {
			const postData = {
				name,
				email,
				Phone: phone,
				carManufacturer,
				carModel,
				addMessage,
			};

			const apiUrl =
				"https://mechnicsorderbackend.onrender.com/api/booking";

			const response = await axios.post(
				apiUrl,
				postData
			);

			// Handle the success response
			console.log("Response:", response.data);
		} catch (error) {
			// Handle any errors that occurred during the request
			console.error("Error in Axios catch:", error);
		} finally {
			// This block will be executed regardless of success or failure
			setIsLoading(false);
			setName("");
			setEmail("");
			setPhone("");
			setCarManufacturer("");
			setCarModel("");
			setAddMessage("");

			toast.success(
				"Thank you, Please check your email for further details",
				{
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				}
			);
		}
	};
	return (
		<div>
			<div className='hidden md:flex'>
				<div className='flex flex-col items-center justify-center h-[70vh] bg-black'>
					<h2 className='brandtitleM  text-red-600'>
						CONTACT
					</h2>

					<p className='bxti uppercase hidden px-80 text-white text-center '>
						get in touch today
					</p>

					<p className='  text-white opacity-100 text-center px-96 '>
						We navigate the complexities of car
						maintenance and repair with
						expertise, offering transparent
						communication and efficient
						solutions.
					</p>
				</div>
			</div>

			<div className='flex md:hidden'>
				<div className='flex flex-col items-center justify-center h-[50vh] bg-black'>
					<h2 className='brandtitle  text-red-600'>
						CONTACT
					</h2>

					<p className='  text-white opacity-100 text-center '>
						We navigate the complexities of car
						maintenance and repair with
						expertise, offering transparent
						communication and efficient
						solutions.
					</p>
				</div>
			</div>

			<section>
				<div className='relative flex justify-center px-8 max-h-full overflow-hidden lg:px-0 md:px-12'>
					<div className='relative z-10 flex flex-col flex-1 px-4 py-10 bg-white shadow-2xl lg:py-24 md:flex-none md:px-28 sm:justify-center'>
						<div className='w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4'>
							<form
								onSubmit={initiatePayment}
							>
								<input
									className='hidden'
									autoComplete='false'
									name='hidden'
								/>
								<input
									name='_redirect'
									type='hidden'
									value='#'
								/>
								<div className='mt-4 space-y-6'>
									<div>
										<label
											className='block mb-3 text-sm font-medium text-gray-600'
											htmlFor='name'
										>
											Name
										</label>
										<input
											className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
											placeholder='Your name'
											name='name'
											value={name} // Bind the email state to the input value
											onChange={
												handleNameChange
											}
										/>
									</div>
									<div className='col-span-full'>
										<label
											className='block mb-3 text-sm font-medium text-gray-600'
											htmlFor='email'
										>
											Email
										</label>
										<input
											className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
											placeholder='Your email'
											name='email'
											value={email} // Bind the email state to the input value
											onChange={
												handleEmailChange
											}
										/>
									</div>
									<div className='col-span-full'>
										<label
											className='block mb-3 text-sm font-medium text-gray-600'
											htmlFor='phone'
										>
											Phone Number
										</label>
										<input
											className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
											placeholder='email@example.com'
											autoComplete='off'
											type='tel'
											name='phone'
											value={phone} // Bind the email state to the input value
											onChange={
												handlePhoneChange
											}
										/>
									</div>
									<div>
										<div className='col-span-full'>
											<label
												className='block mb-3 text-sm font-medium text-gray-600'
												htmlFor='manufacturer'
											>
												Car
												Manufacturer
											</label>
											<div className='mt-1'>
												<input
													className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
													placeholder='Toyota'
													autoComplete='off'
													type='text'
													name='manufacturer'
													value={
														carManufacturer
													} // Bind the email state to the input value
													onChange={
														handleCarManufacturerChange
													}
												/>
											</div>
										</div>
										<div>
											<label
												className='block mt-3 text-sm font-medium text-gray-600'
												htmlFor='model'
											>
												Car Model
											</label>
											<div className='mt-1'>
												<input
													className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
													placeholder='M 2005'
													autoComplete='off'
													type='text'
													name='model'
													value={
														carModel
													} // Bind the email state to the input value
													onChange={
														handleCarModelChange
													}
												/>
											</div>
										</div>

										<div>
											<label
												className='block mt-3 text-sm font-medium text-gray-600'
												htmlFor='addMessage'
											>
												Any
												additional
												info?
											</label>
											<div className='mt-1'>
												<textarea
													className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
													placeholder='Anything you think we should know?'
													rows={4}
													name='message'
													value={
														addMessage
													} // Bind the email state to the input value
													onChange={
														handleAddMessageChange
													}
												></textarea>
											</div>
										</div>
									</div>
									<div className='col-span-full'>
										<button
											onClick={
												initiatePayment
											}
											disabled={
												isLoading
											}
											className='items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black    inline-flex hover:bg-transparent hover:text-black'
										>
											{isLoading ? (
												<div className='flex mt-6 justify-center items-center'>
													<div className='btld mt-10'>
														<div></div>
														<div></div>
														<div></div>
														<div></div>
														<div></div>
														<div></div>
														<div></div>
														<div></div>
														<div></div>
														<div></div>
													</div>
												</div>
											) : (
												"BOOK"
											)}
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="hidden lg:block lg:flex-1 lg:relative sm:contents bg-[url('/images/redcar.jpg')]">
						<div className='absolute top-0 left-0 w-full h-full bg-black opacity-10'></div>
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>

						{/* <div className='absolute inset-0 object-cover w-full h-full bg-white'>
							<Image
								className='object-center w-full h-auto bg-gray-200'
								src='../images/redcar.jpg'
								alt=''
								width='1310'
								height='873'
							/>
						</div> */}
					</div>
				</div>
			</section>

			<Visit />
			<ToastContainer
				position='bottom-right'
				autoClose={3000} // Close toast automatically after 3 seconds
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default ContactPage;
