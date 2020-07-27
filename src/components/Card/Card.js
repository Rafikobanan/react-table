import React from 'react';
import './Card.scss';

const Card = ({className = ''}) => (
	<div className={`card ${className}`}>
		<div className="card-header">
			Выбран пользователь <b>Sue Corson</b>
		</div>
		<div className="card-body">
			<h5 className="card-title">Описание:</h5>
			<textarea className="card__textarea" onChange={()=>{}} value={"et lacus magna dolor..."}></textarea>
			<p className="card-text">Адрес проживания: <b>9792 Mattis Ct</b></p>
			<p className="card-text">Город: <b>Waukesha</b></p>
			<p className="card-text">Провинция/штат: <b>WI</b></p>
			<p className="card-text">Индекс: <b>22178</b></p>
		</div>
	</div>
);

export default Card;