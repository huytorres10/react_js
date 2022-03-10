import React from "react";
class Xe extends React.Component {
	constructor(props) {
		console.log("constructor");
		super(props);
		this.state = {
			color: props.color,
			value: props.value,
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log("getDerivedStateFromProps");
		return { color: props.color, value: props.value };
	}
	changeColor = () => {
		console.log("changeColor");
		this.setState({ color: "blue", value: "Day la chiec xe mau Xanh blue" });
	};
	shouldComponentUpdate() {
		console.log("shouldComponentUpdate", true);
		return true;
	}

	render() {
		console.log("render");
		return (
			<div>
				<h2 style={{ color: this.state.color }}>{this.state.value}</h2>
				<button onClick={this.changeColor}>Change color</button>
			</div>
		);
	}

	componentDidMount() {
		console.log("componentDidMount");
		setTimeout(() => {
			console.log("sau 3s");
			this.setState({ color: "yellow", value: "Day la chiec xe mau vang" });
		}, 2000);
	}
}
export default Xe;
