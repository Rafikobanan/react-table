import React, { useState } from 'react';
import Triangle from '../Triangle';

const TableHead = ({columnNames = [], handlers = columnNames.map(() => () => {})}) => {
	const [activeTriangle, setActiveTriangle] = useState({});

	const clickHandler = (e, index) => {
		handlers[index](e);

		let variant;
		if (activeTriangle.index === index) {
			variant = activeTriangle.variant === 'down' ? 'up' : 'down';
		} else {
			variant = 'down';
		}

		setActiveTriangle({
			index,
			variant
		});
	};

	return (
		<thead>
			<tr>
				{columnNames.map((str, index) => 
					<th onClick={(e) => clickHandler(e, index)} key={'thead_' + index} scope="col">
						{str}
						<Triangle
							variant={activeTriangle.index === index ? activeTriangle.variant : ''}
							className="table__triangle"
						/>
					</th>
				)}
			</tr>
		</thead>
	);
}

export default TableHead;