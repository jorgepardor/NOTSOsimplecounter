import React from "react";
import PropTypes from "prop-types";

//create your first component
let Home = (props) => {
	return (
		<div className="Counter number">
			<div className="fourthDigit digit border">
				{props.fourthDigit % 10}
			</div>
			<div className="thirdDigit  digit border">
				{props.thirdDigit % 10}
			</div>
			<div className="secondDigit  digit border">
				{props.secondDigit % 10}
			</div>
			<div className="firstDigit  digit border">
				{props.firstDigit % 10}
			</div>
			<h6 className="ms-2">СЕКУНДЫ</h6>
		</div>
	);
};

Home.propTypes = {
	firstDigit: PropTypes.number,
	secondDigit: PropTypes.number,
	thirdDigit: PropTypes.number,
	fourthDigit: PropTypes.number,
};

export default Home;
