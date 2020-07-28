import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import { Context } from '../../context/context';
import { CHANGE_CURRENT_CARD } from '../../reducer/types';

function TablePageCard() {
	const {state, dispatch} = useContext(Context);

	const changeTextareaHandler = (e) => {
		dispatch({type: CHANGE_CURRENT_CARD, payload: {
			description: e.target.value
		}});
	};

	return (
		<Card
			className="table-page__card"
			header={state.card.header}
			title="Описание:"
			textareaValue={state.card.description}
			onChangeTextarea={changeTextareaHandler}
			data={state.card.data}
		/>
	);
}
export default TablePageCard;