"use client";
import React, { useState } from "react";
import SiteMenu from "./SiteMenu";
import Link from "next/link";

const NavBar: React.FC = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	// Function to toggle the menu state
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<div className=' md:hidden '>
				<div className='navbar w-screen  top-0 z-50 bg-transparent '>
					<div className='navbar-start'>
						<Link
							href='/'
							onClick={() => {
								closeMenu();
							}}
							className='btn btn-ghost text-xl text-white mr-20'
						>
							<p className='bxtiM'>
								Mechnics
							</p>
						</Link>
					</div>
					<div className='navbar-center'></div>
					<div
						className='navbar-end mr-6'
						// onClick={toggleMenu}
					>
						<div className='transition-opacity duration-300 ease-in-out'>
							{isMenuOpen ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-8 w-8 text-white opacity-100'
									fill='none'
									viewBox='0 0 24 24'
									stroke='white'
									onClick={toggleMenu}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<>
									<input
										type='checkbox'
										id='menuToggle'
										className='hidden'
									/>
									<label
										htmlFor='menuToggle'
										className='block md:hidden cursor-pointer opacity-100'
										onClick={toggleMenu}
									>
										<div className='w-6 h-0.5 bg-white mb-1'></div>
										<div className='w-6 h-0.5 bg-white mb-1'></div>
										<div className='w-6 h-0.5 bg-white'></div>
									</label>
								</>
							)}
						</div>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<SiteMenu closeMenu={closeMenu} />
			)}
		</>
	);
};

export default NavBar;
