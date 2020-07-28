import React from 'react';
import './Error.scss';

const Error = (props) => (
	<div {...props} className={`error  ${props.className}`}>
		{props.text}
	</div>
);

export default Error;