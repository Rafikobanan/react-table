import React, { useState, useContext } from 'react';
import Button from '../../components/UI/Button';
import Form from '../../components/Form/Form';
import { Context } from '../../context/context';
import { SET_DATA } from '../../reducer/types';

function TablePageAdd() {
	const {state, dispatch} = useContext(Context);

	const [isFormActive, setIsFormActive] = useState(false);
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [formData, setFormData] = useState({
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	});

	const changeHandler = (e, key) => {
		const value = e.target.value;

		const temp = {
			...formData,
			[key]: key === 'id' ? +value : value
		};

		setFormData({
			...temp
		});

		let isButtonDisabled = false;

		Object.values(temp).forEach((value) => {
			if (!value && value !== 0) {
				isButtonDisabled = true;
			}
		})

		setIsButtonDisabled(isButtonDisabled);
	};

	const clickHandler = (e) => {
		e.preventDefault();

		dispatch({type: SET_DATA, payload: [
			{
				...formData,
				description: '',
				address: {
					streetAddress: '',
					city: '',
					state: '',
					zip: ''
				}
			},
			...state.data
		]});

		setFormData({
			id: '',
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
		});

		setIsFormActive(false);
	};

	return (
		<div className="table-page__add">
			<Button
				onClick={() => {setIsFormActive(!isFormActive)}}
				variant="primary"
				text="Добавить"
			/>
			{isFormActive ? 
				<Form
					inputsProps={[
						{
							type: 'number',
							onChange: (e) => changeHandler(e, 'id'),
							placeholder: 'id',
							value: formData.id
						},
						{
							onChange: (e) => changeHandler(e, 'firstName'),
							placeholder: 'First Name',
							value: formData.firstName
						},
						{
							onChange: (e) => changeHandler(e, 'lastName'),
							placeholder: 'Last Name',
							value: formData.lastName
						},
						{
							type: 'email',
							onChange: (e) => changeHandler(e, 'email'),
							placeholder: 'Email',
							value: formData.email
						},
						{
							type: 'tel',
							onChange: (e) => changeHandler(e, 'phone'),
							placeholder: 'phone',
							value: formData.phone
						},
					]}
					buttonProps={{
						text: 'Добавить в таблицу',
						onClick: isButtonDisabled ? null : clickHandler,
						variant: 'primary',
						disabled: isButtonDisabled ? true : false
					}}
				/> : 
			''}
		</div>
	);
}

export default TablePageAdd;