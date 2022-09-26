import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/rubik";

function App() {
	return (
		<div className="App">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
