import React from "react";
class Xe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: props.color,
			value: props.value,
		};
	}
	render() {
		return <h2 style={{ color: this.state.color }}>{this.state.value}</h2>;
	}
}
export default Xe;
