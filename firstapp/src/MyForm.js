import React from "react";
class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "" };
	}
	myChangeHandler = (event) => {
		this.setState({ username: event.target.value });
	};
	changeValueOption = (event) => {
		console.log(event.target.innerText.split("/")[event.target.value]);
	};
	render() {
		let header = "";
		if (this.state.username) {
			header = this.state.username;
		}
		return (
			<form>
				<h2 style={{ color: "red" }}>{header}</h2>
				<h1>Hello {this.state.username}</h1>
				<p>Enter your name:</p>
				<input type="text" onChange={this.myChangeHandler} />
				<select onChange={this.changeValueOption}>
					<option value="1">Huy dz</option>
					<option value="2">Huy xz</option>
					<option value="3">Huy ngu</option>
				</select>
			</form>
		);
	}
}
export default MyForm;
