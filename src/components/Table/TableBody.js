import React from 'react';
import TableRow from './TableRow';

const TableBody = ({data = [[]], handlers}) => (
	<tbody>
		{data.map((arr, index) => <TableRow onClick={handlers[index]} key={'row_' + index} data={arr} rowIndex={index}/>)}
	</tbody>
);

export default TableBody;