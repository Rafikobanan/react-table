import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import './Form.scss';

const Form = ({className = '', inputsProps = [{}], buttonProps = []}) => (
	<form className={`form ${className}`}>
		<hr />
		{inputsProps.map((prop, index) => (
			<Input key={index} {...prop} className="form__input"/>
		))}
		<Button {...buttonProps} />
		<hr />
	</form>
);

export default Form;