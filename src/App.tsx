import "./styles/global.css";
import Header from "./components/Header";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Instructor from "./components/Instructors";
import Modality from "./components/Modality";
import Word from "./components/Word";
import Characteristics from "./components/Characteristics";

function App() {

	return (
		<div className="App">
			<Header />
			<Intro />
			<Characteristics />
			<Modality />
			<Plans />
			<Word />
			<Instructor />
			<Footer />
		</div>
	);
}

export default App;
