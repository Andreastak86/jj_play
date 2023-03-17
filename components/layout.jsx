import Footer from "./footer";
import NavBar from "./navbar";

export default function Layout({ children }) {
	return (
		<>
		<div
		// site
		className="flex flex-col min-h-screen"
		>
		 <NavBar />
		 <div
		//  content
		className="flex-1"
		 >
		 {children}
		 </div>
		 <Footer />
		</div>
		</>
	)
}
