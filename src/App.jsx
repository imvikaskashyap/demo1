import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WriteReview from "./components/WriteReview/WriteReview";
import OrderCancel from "./components/OrderCancel/OrderCancel";
import Nav from "./components/Nav";
import Invoice from "./components/Invoice/Invoice";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Filter from "./components/Filter/Filter";

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/review" element={<WriteReview />} />
				<Route path="/order" element={<OrderCancel />} />
				<Route path="/invoice" element={<Invoice />} />
				<Route path="/resetpassword" element={<ResetPassword />} />
				<Route path="/register" element={<CreateAccount />} />
				<Route path="/filter" element={<Filter />} />
			</Routes>
		</Router>
	);
}

export default App;
