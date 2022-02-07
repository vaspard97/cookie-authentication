import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/action/authAction";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import PrivatePage from "./pages/privatePage";
import LoadingPage from "./pages/loadingPage";
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUser());
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/dashboard" element={<PrivatePage />} />
				<Route path="/test" element={<LoadingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
