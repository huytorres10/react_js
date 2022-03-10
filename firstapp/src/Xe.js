import React from "react";
class Xe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: props.color,
			value: props.value,
		};
		this.clickH2 = this.clickH2.bind(this);
	}

	static getDerivedStateFromProps(props, state) {
		return { color: props.color, value: props.value };
	}
	changeColor = () => {
		this.setState({ color: "blue", value: "Day la chiec xe mau Xanh blue" });
	};
	clickH2() {
		// alert("day la onClick H2");
		console.log(this);
	}
	clickH21 = (a) => {
		// alert("day la onClick H2");
		console.log(this, a);
	};
	shouldComponentUpdate() {
		return true;
	}

	render() {
		return (
			<div>
				<h2 onClick={() => this.clickH21("Huy")} style={{ color: this.state.color, cursor: "pointer" }}>
					{this.state.value}
				</h2>
				<button onClick={this.changeColor}>Change color</button>
			</div>
		);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ color: "yellow", value: "Day la chiec xe mau vang" });
		}, 2000);
	}
}
export default Xe;
