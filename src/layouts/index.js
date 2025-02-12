import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

// import bg_video from "../assets/images/bg_video.mov";
import Header from "./Header";
import Footer from "./Footer";

const WebsiteLayout = () => {
	return (
		<Suspense>
			{/* ========== Header ========== */}
			<Header />

			{/* ========== Main ========== */}
			<main>
				{/* <video src={bg_video} /> */}
				<Outlet />
			</main>

			{/* ========== Footer ========== */}
			<Footer />
		</Suspense>
	);
};

export default WebsiteLayout;
