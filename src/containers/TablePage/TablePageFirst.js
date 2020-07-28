import React, { useContext } from 'react';
import Button from '../../components/UI/Button';
import { Context } from '../../context/context';
import { SET_IS_LOADING, SET_IS_FIRST, SET_DATA, SET_IS_ERROR } from '../../reducer/types';
import Axios from 'axios';
import { smallDataUrl, bigDataUrl } from './dataUrl';

function TablePageFirst() {
	const {dispatch} = useContext(Context);

	const clickHandler = async (type) => {
		dispatch({type: SET_IS_FIRST, payload: false});
		dispatch({type: SET_IS_LOADING, payload: true});

		const url = type === 'small' ? smallDataUrl : bigDataUrl;

		try {
			const response = await Axios({
				method: 'get',
				url
			});

			const data = response.data;

			dispatch({type: SET_DATA, payload: data});
			dispatch({type: SET_IS_LOADING, payload: false});
		} catch(e) {
			dispatch({type: SET_IS_LOADING, payload: false});
			dispatch({type: SET_IS_ERROR, payload: true});
		}
	};

	return (
		<div className="table-page__first">
			<div className="table-page-first__buttons">
				<Button
					variant="primary"
					className="table-page-first__button"
					text={"Маленький"}
					onClick={() => clickHandler('small')}
				/>
				<Button
					variant="success"
					className="table-page-first__button"
					text={"Большой"}
					onClick={() => clickHandler('big')}
				/>
			</div>
		</div>
	);
};

export default TablePageFirst;