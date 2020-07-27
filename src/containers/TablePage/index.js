import React from 'react';
import Table from '../../components/Table';
import { data } from './storage';
import Pagination from '../../components/Pagination';
import InputGroup from '../../components/UI/InputGroup';
import './TablePage.scss';
import Button from '../../components/UI/Button';
import Card from '../../components/Card/Card';

function TablePage() {
	const columnNames = [
		'Id',
		'First name',
		'Last name',
		'Email',
		'Phone'
	];

	const dataToShow = data.map((item) => [
		item['id'], item['firstName'], item['lastName'], item['email'], item['phone']
	]);

	return (
		<div className="table-page">
			<InputGroup
				className="table-page__input-group"
				inputProps={{placeholder: "Вставьте текст"}}
				buttonProps={{text: 'Найти'}}
			/>
			<div className="table-page__add">
				<Button text="Добавить"/>
			</div>
			<Table
				columnNames={columnNames}
				data={dataToShow}
				className="table-page__table"
			/>
			<Card className="table-page__card"/>
			<Pagination className="table-page__pagination" content={[1, 2, 3]}/>
		</div>
	);
}

export default TablePage;