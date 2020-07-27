import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import './Table.scss';

const Table = ({className = '', data = [[]], columnNames = []}) => (
	<table className={`table table-hover ${className}`}>
		<TableHead columnNames={columnNames}/>
		<TableBody data={data}/>
	</table>
);

export default Table;