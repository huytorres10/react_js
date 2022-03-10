import logo from "./logo.svg";
import "./App.css";
import Xe from "./Xe";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React 123
				</a>
				<Xe color="red" value="Day la xe mau do" />
				{/* <Xe color="blue" value="Day la xe mau xanh" />
				<Xe color="white" value="Day la xe mau trang" /> */}
			</header>
		</div>
	);
}

export default App;
