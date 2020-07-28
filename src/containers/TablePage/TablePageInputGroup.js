import React, { useState, useContext } from 'react';
import InputGroup from '../../components/UI/InputGroup';
import { Context } from '../../context/context';
import { FIND_BY_STRING } from '../../reducer/types';

function TablePageInputGroup() {
	const {dispatch} = useContext(Context);
	const [inputValue, setInputValue] = useState('');

	const clickHandler = () => {
		dispatch({type: FIND_BY_STRING, payload: inputValue});
	};

	const keyDownHandler = (e) => {
		if (e.key.toLowerCase() === 'enter') clickHandler();
	};

	return (
		<InputGroup
			className="table-page__input-group"
			inputProps={{
				placeholder: "Вставьте текст",
				value: inputValue,
				onChange: (e) => setInputValue(e.target.value.trim()),
				onKeyDown: keyDownHandler
			}}
			buttonProps={{
				text: 'Найти',
				variant: 'primary',
				onClick: clickHandler
			}}
		/>
	);
}

export default TablePageInputGroup;