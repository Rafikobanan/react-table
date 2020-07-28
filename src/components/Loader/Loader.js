import React from 'react';
import './Loader.scss';

const Loader = (props) => (
	<div {...props} className={`lds-dual-ring ${props.className}`}></div>
);

export default Loader;