import React from "react";
import PropTypes from "prop-types";
import Radial from "../../img/patternradio.png";
import Bg from "../../img/metalbg.jpg";

//create your first component
let Home = (props) => {
	return (
		<div class="Container wrap">
			<div className="my-4">
				<img src={Radial} class="radialSpeaker" alt="Logo" />
			</div>

			<h3>МЫ С ГОРДОСТЬЮ РАБОТАЛИ</h3>

			<div className="d-flex justify-content-center my-4">
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
				<h3 className="ms-2 seconds align-self-center">СЕКУНДЫ</h3>
			</div>

			<div>
				<h3>БЕЗ ПРОИСШЕСТВИЙ</h3>
			</div>
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
