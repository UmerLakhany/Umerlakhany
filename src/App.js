import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import WebsiteLayout from "./layouts";
import AppRoutes from "./routes/routes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<WebsiteLayout />}>
					{AppRoutes.map((route, index) => (
						<Route key={index} path={route.path} element={route.component} />
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
