"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MobileCheckout from "@/components/homeSections/mobileCom/MobileCheckout";

type FormData = {
	name: string;
	phone: string;
	email: string;
};

const Checkout = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [isLoading, setIsLoading] =
		useState<boolean>(false);

	const schema: ZodType<FormData> = z.object({
		name: z.string().min(2).max(20),
		email: z.string().email(),
		phone: z.string().min(8).max(20),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

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

	// Assuming you have the required data for the payment
	const paymentData = {
		amount: 5000, // Amount in kobo (e.g., 5000 for ₦50.00)
		email: email,
		metadata: {
			custom_fields: [
				{
					display_name: name,
					variable_name: "Professional",
					value: "professional Package",
				},
			],
		},
	};

	const initiatePayment = async () => {
		setIsLoading(true);
		try {
			const response = await axios.post(
				"https://paystackapi-76lq.onrender.com/api/initiate-payment",
				paymentData
			);
			const authorizationUrl =
				response.data.authorization_url;
			// Use the authorizationUrl to redirect the user to Paystack for payment
			setName("");
			setEmail("");
			setPhone("");

			setIsLoading(false);
			toast.success(
				"You will be redirected shortly",
				{
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				}
			);
			window.location.href = authorizationUrl;
		} catch (error) {
			console.error(
				"Error initiating payment:",
				error
			);
			// Handle error feedback to the user
		}
	};

	return (
		<>
			<div className='hidden w-screen h-screen bg-white md:flex md:flex-row'>
				<div className="relative w-[100vw] h-[100vh] bg-black flex flex-col bg-cover bg-[url('/images/redcar.jpg')]">
					<div className='absolute  z-10 top-0 left-0 w-full h-full bg-black opacity-10'></div>
					<div className='absolute  z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
					<div className='absolute  z-10 top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>

					<div className='z-40 flex flex-row w-[100vw] h-[100vh]'>
						<div className='relative flex flex-col w-[60vw] h-[100vh]'>
							<div className='absolute bottom-20 left-20'>
								<div className='mt-3 shadow-lg'>
									<h1 className='bxti pr-5  md:text-white mr-0'>
										PROFESSIONAL -
										<span className='text-orange-500'>
											{" "}
											$ 250.00 USD
										</span>
									</h1>
								</div>

								<div className='mt-2 opacity-90'>
									<h2 className='deskPara text-white text-left pr-5 mr-5'>
										Dedicated to
										providing expert
										maintenance,
										servicing, and
										repair for your
										vehicle. Our
										commitment ensures
										your car runs
										smoothly, so you can
										drive with
										confidence.
									</h2>
								</div>
							</div>
						</div>
						<div className='flex flex-col w-[40vw] h-[100vh]'>
							<div className='w-[40vw] h-[100vh] flex flex-col'>
								<div className='flex flex-col items-center justify-center h-[100vh] mt-20'>
									<div className='w-full z-40  max-w-sm mx-auto overflow-hidden shadow-2xl bg-white dark:bg-gray-800'>
										<div className='px-6 py-4 h-[70vh] pt-20'>
											<div>
												<div className='w-80 '>
													<div className=''>
														<div className='mt-5'>
															<form
																onSubmit={handleSubmit(
																	initiatePayment
																)}
															>
																<label>
																	Name
																</label>

																<input
																	{...register(
																		"name"
																	)}
																	type='text'
																	name='name'
																	id='name'
																	placeholder='Name'
																	className='mt-1 w-full border-b-2 border-black px-0 py-1 placeholder:text-transparent focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none'
																	autoComplete='off' // Changed to 'off' from 'NA'
																	value={
																		name
																	} // Bind the email state to the input value
																	onChange={
																		handleNameChange
																	} // Handle input change
																/>
																{errors.name && (
																	<span className='text-red-600'>
																		{
																			errors
																				.name
																				.message
																		}
																	</span>
																)}

																<label>
																	Email
																</label>

																<input
																	{...register(
																		"email"
																	)}
																	type='email'
																	name='email'
																	id='email'
																	placeholder='Email'
																	className='mt-1 w-full border-b-2 border-black px-0 py-1 placeholder:text-transparent focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none'
																	autoComplete='off' // Changed to 'off' from 'NA'
																	value={
																		email
																	} // Bind the email state to the input value
																	onChange={
																		handleEmailChange
																	} // Handle input change
																/>
																{errors.email && (
																	<span className='text-red-600'>
																		{
																			errors
																				.email
																				.message
																		}
																	</span>
																)}

																<label>
																	Phone
																</label>

																<input
																	{...register(
																		"phone"
																	)}
																	type='tel'
																	name='phone'
																	id='phone'
																	placeholder='Phone Number'
																	className='mt-1 w-full border-b-2 border-black px-0 py-1 placeholder:text-transparent focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none'
																	autoComplete='off' // Changed to 'off' from 'NA'
																	value={
																		phone
																	} // Bind the email state to the input value
																	onChange={
																		handlePhoneChange
																	} // Handle input change
																/>
																{errors.phone && (
																	<span className='text-red-600'>
																		{
																			errors
																				.phone
																				.message
																		}
																	</span>
																)}

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
																	<button
																		type='submit'
																		className='w-full text-center bg-orange-500 px-2 py-2 text-black mt-4'
																	>
																		Make
																		Payment
																	</button>
																)}
															</form>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<MobileCheckout />
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
		</>
	);
};

export default Checkout;
