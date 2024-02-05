import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/navigation/Footer";
import NavBar from "@/components/navigation/NavBar";
import DeskNavBar from "@/components/navigation/DeskNavBar";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className=''>
				<NavBar />
				<DeskNavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}