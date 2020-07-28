import React from 'react';

const Button = (props) => (
	<button
		{...props}
		className={`btn ${props.variant ? 'btn-' + props.variant : ''} ${props.className}`}
	>
		{props.text}
	</button>
);

export default Button;