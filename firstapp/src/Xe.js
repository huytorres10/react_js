import React from "react";
class Xe extends React.Component {
	render() {
		return <h2 style={{ color: this.props.color }}>{this.props.value}</h2>;
	}
}
export default Xe;
