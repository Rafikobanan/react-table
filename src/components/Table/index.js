import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import './Table.scss';

const Table = ({
	className = '',
	data = [[]],
	columnNames = [],
	headHandlers,
	rowHandlers
}) => (
	<table className={`table table-hover ${className}`}>
		<TableHead handlers={headHandlers} columnNames={columnNames}/>
		<TableBody handlers={rowHandlers} data={data}/>
	</table>
);

export default Table;