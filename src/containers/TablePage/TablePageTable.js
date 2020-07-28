import React, { useContext } from 'react';
import Table from '../../components/Table';
import { Context } from '../../context/context';
import { SORT_BY_KEY, SET_CARD } from '../../reducer/types';
import { recordsPerPage } from './utils';

function TablePageTable({currentPageIndex = 0}) {
	const {state, dispatch} = useContext(Context);

	const columnNames = [
		'Id',
		'First name',
		'Last name',
		'Email',
		'Phone'
	];

	const dataToShow = state.dataToShow
		.slice(currentPageIndex * recordsPerPage, currentPageIndex * recordsPerPage + recordsPerPage)
		.map((item) => [
			...state.columnKeys.map((key) => item[key])
		]); // [[string, string, ...]]

	const sortHandlers = state.columnKeys.map((key) => () => dispatch({type: SORT_BY_KEY, payload: {key}}));
	const rowHandlers = state.dataToShow
		.slice(currentPageIndex * recordsPerPage, currentPageIndex * recordsPerPage + recordsPerPage)
		.map((item) => () => dispatch({type: SET_CARD, payload: item.uid}));

	return (
		<Table
			headHandlers={sortHandlers}
			rowHandlers={rowHandlers}
			columnNames={columnNames}
			data={dataToShow}
			className="table-page__table"
		/>
	);
}

export default TablePageTable;