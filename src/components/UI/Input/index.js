import React from 'react';

const Input = (props) => (
	<input
		type="text"
		{...props}
		className={`form-control ${props.className}`}
		aria-label={props.placeholder}
	/>
);

export default Input;