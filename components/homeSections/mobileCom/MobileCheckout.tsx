"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaystackButton } from "react-paystack";

type FormData = {
	name: string;
	phone: string;
	email: string;
};

const MobileCheckout = () => {
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
	const Key = process.env.NEXT_PUBLIC_API_KEY;
	console.log("Public Key:", Key);
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

	const publicKey = process.env.NEXT_PUBLIC_API_KEY!;
	const amount = 1000000;
	const componentProps = {
		email,
		amount: amount,
		metadata: {
			custom_fields: [
				{
					display_name: name,
					variable_name: "Professional",
					value: "professional Package",
				},
			],
		},
		publicKey,
		text: "Pay Now",
		onSuccess: () => {
			alert(
				"Thanks for doing business with us! Please check your email for order details"
			);
			setName("");
			setEmail("");
			setPhone("");
		},
		onClose: () =>
			alert("Wait! You need this oil, don't go!!!!"),
	};

	const initiatePayment = async () => {
		setIsLoading(true);
		try {
			const response = await axios.post(
				"http://localhost:3009/api/initiate-payment",
				paymentData
			);
			const authorizationUrl =
				response.data.authorization_url;
			// Use the authorizationUrl to redirect the user to Paystack for payment
			setName("");
			setEmail("");
			setPhone("");

			setIsLoading(false);
			toast.success("Thanks for subscribing", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
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
			<div className=' w-screen h-screen bg-white flex flex-col md:hidden'>
				<div className="relative w-[100vw] h-[60vh] bg-black flex flex-col bg-cover bg-[url('/images/redcar.jpg')]">
					<div className='absolute  z-10 top-0 left-0 w-full h-full bg-black opacity-10'></div>
					<div className='absolute  z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
					<div className='absolute  z-10 top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
					<div className=' flex flex-col '>
						<div className='z-20 absolute bottom-12 mx-auto'>
							<div className='shadow-lg'>
								<h1 className='bxtiM text-white text-center pr-5  '>
									PROFESSIONAL <br></br>
									<span className='text-orange-500'>
										{" "}
										$ 250.00 USD
									</span>
								</h1>
							</div>

							<div className=''>
								<h2 className='deskPara mt-8  text-white text-center mx-aut pr-10 pl-10 '>
									Dedicated to providing
									expert maintenance,
									servicing, and repair
									for your vehicle. Our
									commitment ensures your
									car runs smoothly, so
									you can drive with
									confidence.
								</h2>
							</div>
						</div>
					</div>
				</div>

				<div className='w-[100vw] h-[100vh] z-20 flex flex-col items-center justify-center overflow-hidden shadow-2xl bg-black '>
					<div>
						<div className='flex flex-col items-center justify-center h-[60vh] bg-white'>
							<div className=''>
								<div className='mt-5 flex flex-col justify-center items-center '>
									<p className='brandtitleM mb-10 p-2 '>
										( Integrated with
										PAYSTACK payment
										system )
									</p>

									<form
										onSubmit={handleSubmit(
											initiatePayment
										)}
										className='flex flex-col '
									>
										<label>Name</label>

										<input
											{...register(
												"name"
											)}
											type='text'
											name='name'
											id='mname'
											placeholder='Name'
											className='mt-1 mb-4 w-80 border-b-2 border-black px-0 py-1 placeholder:text-transparent focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none'
											autoComplete='off' // Changed to 'off' from 'NA'
											value={name} // Bind the email state to the input value
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

										<label>Email</label>

										<input
											{...register(
												"email"
											)}
											type='email'
											name='email'
											id='memail'
											placeholder='Email'
											className='mt-1 mb-4 w-80 border-b-2 border-black px-0 py-1 placeholder:text-transparent focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none'
											autoComplete='off' // Changed to 'off' from 'NA'
											value={email} // Bind the email state to the input value
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

										<label>Phone</label>

										<input
											{...register(
												"phone"
											)}
											type='tel'
											name='phone'
											id='mphone'
											placeholder='Phone Number'
											className='mt-1 w-80 border-b-2 border-black px-0 py-1 placeholder:text-transparent focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none'
											autoComplete='off' // Changed to 'off' from 'NA'
											value={phone} // Bind the email state to the input value
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

										{/* {isLoading ? (
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
												className='w-80 mt-10 text-center bg-orange-500 px-2 py-2 text-black '
											>
												Make Payment
											</button>
										)} */}
										<div className='w-80 mt-10 text-center bg-orange-500 px-2 py-2 text-black'>
											<PaystackButton
												{...componentProps}
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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

export default MobileCheckout;
