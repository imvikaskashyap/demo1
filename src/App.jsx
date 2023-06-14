import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WriteReview from "./components/WriteReview/WriteReview";
import OrderCancel from "./components/OrderCancel/OrderCancel";
import Nav from "./components/Nav";

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				{/* <Route path="/home" element={<WriteReview />} /> */}
				<Route path="/order" element={<OrderCancel />} />


			</Routes>
		</Router>
	);
}

export default App;