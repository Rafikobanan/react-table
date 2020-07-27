import React from 'react';
import Triangle from '../Triangle';

const TableHead = ({columnNames = []}) => (
	<thead>
		<tr>
			{columnNames.map((str, index) => 
				<th key={'thead_' + index} scope="col">
					{str}
					<Triangle className="table__triangle"/>
				</th>
			)}
		</tr>
	</thead>
);

export default TableHead;