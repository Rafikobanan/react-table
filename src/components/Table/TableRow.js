import React from 'react';

const TableRow = ({data = [], rowIndex = '', onClick = () => {}}) => (
	<tr onClick={onClick} >
		{data.map((str, index) => <td key={'row_' + rowIndex + 'td_' + index}>{str}</td>)}
	</tr>
);

export default TableRow;