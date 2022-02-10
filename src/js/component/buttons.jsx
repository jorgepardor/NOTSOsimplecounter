import React from "react";
import PropTypes from "prop-types";

//create your first component
let Buttons = (props) => {
	return (
		<div>
			<h3 className="mt-5">ДОСТУПНЫЕ ДЕЙСТВИЯ:</h3>

			<div className="buttons d-flex justify-content-center my-5">
				<button className="btn btn-danger btn-lg mx-4"></button>
				<p className="align-self-center text-start">
					ПРОИЗОШЛА <br />
					УЖАСНАЯ АВАРИЯ
				</p>
				<button className="btn btn-warning btn-lg mx-4"></button>
				<p className="align-self-center text-start">
					ОСТАНОВИТЬСЯ <br />
					ДЛЯ ТЕСТА
				</p>
			</div>
		</div>
	);
};

export default Buttons;
