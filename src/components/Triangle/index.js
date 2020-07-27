import React from 'react';
import './Triangle.scss';

const Triangle = ({variant, className = ''}) => {
	const triangleCls = `triangle ${className}`;

	switch(variant) {
		case 'up':
			return <div className={triangleCls}>▲</div>;
		case 'down':
			return <div className={triangleCls}>▼</div>;
		default:
			return (
				<div className={triangleCls}>
					<div className="triangle__up">▲</div>
					<div className="triangle__down">▼</div>
				</div>
			);
	}
};

export default Triangle;