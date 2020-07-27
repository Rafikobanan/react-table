import React from 'react';

const TableRow = ({data = [], rowIndex = ''}) => (
	<tr>
		{data.map((str, index) => <td key={'row_' + rowIndex + 'td_' + index}>{str}</td>)}
	</tr>
);

export default TableRow;