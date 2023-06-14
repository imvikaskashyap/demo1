import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WriteReview from "./components/WriteReview";

function App() {
	return (
		<Router>
			{/* <Nav /> */}
			<Routes>
				<Route path="/home" element={<WriteReview />} />
			</Routes>
		</Router>
	);
}

export default App;