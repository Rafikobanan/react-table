import React from 'react';
import Pagination from '../../components/Pagination';
import { pagination } from './utils';

function TablePagePagination({currentPageIndex = 0, lastPageIndex = 0, onChangeCurrentPageIndex = () => {}}) {
	const content = pagination(currentPageIndex + 1, lastPageIndex + 1);

	let handlers = content.map((item) => () => {
		if (typeof item === 'string') return;
		onChangeCurrentPageIndex(item - 1);
	});

	handlers = [
		() => onChangeCurrentPageIndex(currentPageIndex - 1),
		...handlers,
		() => onChangeCurrentPageIndex(currentPageIndex + 1)
	];

	return (
		<Pagination
			activeNumber={currentPageIndex + 1}
			handlers={handlers}
			className="table-page__pagination"
			content={content}
		/>
	);
}

export default TablePagePagination;