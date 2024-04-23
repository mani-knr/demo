import "./App.css";
import { Appointments } from "./components/Appointments";
import { Form } from "./components/Form";

function App() {
	return (
		<div className="main-container">
			<Form />
			<div className="divider"></div>
			<Appointments />
		</div>
	);
}

export default App;
