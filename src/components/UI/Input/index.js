import React from 'react';

const Input = (props) => (
	<input
		{...props}
		type="text"
		className={`form-control ${props.className}`}
		aria-label={props.placeholder}
	/>
);

export default Input;