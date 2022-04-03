import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePage from "./containers/CreatePage";
import DetailsPage from "./containers/DetailsPage";
import HomePage from "./containers/HomePage";
import "./App.css";
import "./components/components.css";

function App() {
	return (
		<Router>
			<div className="App">
				<div className="app-content">
					<NavBar />
					<Routes>
						<Route exact path="/simple-blog" element={<HomePage />} />
						<Route exact path="/simple-blog/create" element={<CreatePage />} />
						<Route
							exact
							path="/simple-blog/details:blogId"
							element={<DetailsPage />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
