import React from "react";
import PropTypes, { resetWarningCache } from "prop-types";
import { useEffect, useState } from "react";
import { start, reset } from "../index.js";

// Import graphics and assets
import Radial from "../../img/patternradio.png";

//create your first component
let Home = (props) => {
	const [stop, setStop] = useState("Play");

	useEffect(() => {
		if (stop == "Stop") {
			console.log("playing");
			let myInterval = setInterval(() => {
				start();
			}, 1000);
			return () => {
				clearInterval(myInterval);
			};
		} else {
			console.log("stopped");
		}
	}, [stop]);

	return (
		<div className="Container wrap">
			<div className="d-flex justify-content-center my-4">
				<img src={Radial} className="radialSpeaker" alt="Logo" />
			</div>

			<h3 class="d-flex justify-content-center">
				МЫ С ГОРДОСТЬЮ РАБОТАЛИ
			</h3>

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
				<h3 class="d-flex justify-content-center">БЕЗ ПРОИСШЕСТВИЙ</h3>
			</div>

			<div>
				<h3 className="buttonText text-center">ДОСТУПНЫЕ ДЕЙСТВИЯ:</h3>
				<table className="table-borderless my-3">
					<tbody>
						<tr>
							<td>
								<p className="text-center">
									НАЖМИТЕ ТОЛЬКО В СЛУЧАЕ АВАРИИ
								</p>
							</td>
							<td>
								<p className="text-center">
									ПРИОСТАНОВИТЬ ПРЕДУПРЕЖДЕНИЯ ДЛЯ
									ТЕСТИРОВАНИЯ
								</p>
							</td>
						</tr>
						<tr>
							<td className="text-center">
								<button
									className="btn btn-danger btn-lg"
									onClick={reset}></button>
							</td>
							<td className="text-center">
								<button
									className="btn btn-warning btn-lg mx-4"
									id="stop"
									onClick={() => {
										stop == "Play"
											? (setStop("Stop"),
											  console.log("cambiado"))
											: setStop("Play");
									}}></button>
							</td>
						</tr>
					</tbody>
				</table>
				;
				{/* <div className="d-flex justify-content-center my-5">
					<button
						className="btn btn-danger btn-lg mx-4"
						onClick={reset}>
						Stop
					</button>

					<p className="align-self-center text-start">
						НАЖМИТЕ ТОЛЬКО В СЛУЧАЕ АВАРИИ
					</p>

					<button
						className="btn btn-warning btn-lg mx-4"
						id="stop"
						onClick={() => {
							stop == "Play"
								? (setStop("Stop"), console.log("cambiado"))
								: setStop("Play");
						}}>
						{stop}
					</button>
					<p className="align-self-center text-start">
						ПРИОСТАНОВИТЬ ПРЕДУПРЕЖДЕНИЯ ДЛЯ ТЕСТИРОВАНИЯ
					</p>
				</div> */}
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
