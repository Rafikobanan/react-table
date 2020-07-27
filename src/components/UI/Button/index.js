import React from 'react';

const Button = (props) => (
	<button
		{...props}
		className={`btn btn-outline-secondary ${props.className}`}
		type="button"
	>
		{props.text}
	</button>
);

export default Button;