import React from "react";
import PropTypes from 'prop-types';
import {Icon}  from "./icon";

export function SimpleCounter(props) {
	return (
		<div className="container">
			<div className='Clock'>
				<Icon/>
			</div>
			<div className='six'>{props.digitSix %10}</div>
			<div className='five'>{props.digitFive %10}</div>
			<div className='four'>{props.digitFour %10}</div>
			<div className='three'>{props.digitThree %10}</div>
			<div className='two'>{props.digitTwo %10}</div>
			<div className='one'>{props.digitOne %10}</div>
		</div>
	)
}

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
}