import React, { useContext, useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import TablePageInputGroup from './TablePageInputGroup';
import TablePageAdd from './TablePageAdd';
import TablePageTable from './TablePageTable';
import TablePageCard from './TablePageCard';
import TablePagePagination from './TablePagePagination';
import TablePageFirst from './TablePageFirst';
import { Context } from '../../context/context';
import { calculateLastPageIndex } from './utils';
import './TablePage.scss';

const withTableWrapper = (WrappedComponent) => () => (
	<div className="table-page">
		<WrappedComponent />
	</div>
);

function TablePage() {
	const {state} = useContext(Context);
	const [currentPageIndex, setCurrentPageIndex] = useState(0);
	const lastPageIndex = calculateLastPageIndex(state.dataToShow.length);

	const changeCurrentPageIndexHandler = (index) => {
		if (index < 0) index = 0;
		if (index > lastPageIndex) index = lastPageIndex;
		setCurrentPageIndex(index);
	};

	useEffect(() => {
		setCurrentPageIndex(0);
	}, [state.dataToShow]);

	if (state.isFirst) return <TablePageFirst />

	if (state.isLoading) return <Loader className="table-page__loader"/>

	if (state.isError) return <Error className="table-page__error" text="Произошла ошибка при загрузке" />

	return (
		<>
			<TablePageInputGroup />
			<TablePageAdd />
			<TablePageTable currentPageIndex={currentPageIndex}/>
			<TablePageCard />
			<TablePagePagination
				currentPageIndex={currentPageIndex}
				lastPageIndex={lastPageIndex}
				onChangeCurrentPageIndex={changeCurrentPageIndexHandler}
			/>
		</>
	);
}

export default withTableWrapper(TablePage);