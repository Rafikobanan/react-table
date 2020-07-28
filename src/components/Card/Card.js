import React from 'react';
import './Card.scss';

const Card = ({
	className = '',
	header = '',
	title = '',
	textareaValue = '',
	onChangeTextarea = () => {},
	data = []
}) => (
	<div className={`card ${className}`}>
		<div className="card-header">
			{header}
		</div>
		<div className="card-body">
			<h5 className="card-title">{title}</h5>
			<textarea className="card__textarea" onChange={onChangeTextarea} value={textareaValue}></textarea>
			{data.map((item, index) => (
				<p key={'card-text_' + index} className="card-text">{item}</p>
			))}
		</div>
	</div>
);

export default Card;