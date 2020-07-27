import React from 'react';
import TableRow from './TableRow';

const TableBody = ({data = [[]]}) => (
	<tbody>
		{data.map((arr, index) => <TableRow key={'row_' + index} data={arr} rowIndex={index}/>)}
	</tbody>
);

export default TableBody;