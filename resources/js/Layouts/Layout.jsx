import { Link } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
}
