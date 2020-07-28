import React, { useReducer } from 'react';
import TablePage from './containers/TablePage';
import Layout from './hoc/Layout/Layout';
import { Context } from './context/context';
import reducer from './reducer/reducer';

function App() {
	const [state, dispatch] = useReducer(reducer, {
		isFirst: true,
		isLoading: false,
		isError: false,
		data: [],
		columnKeys: [
			'id',
			'firstName',
			'lastName',
			'email',
			'phone'
		],
		dataToShow: [],
		lastSortedKey: '',
		card: {
			header: '',
			description: '',
			data: []
		}
	});

  return (
		<Context.Provider value={{state, dispatch}}>
			<Layout>
				<TablePage />
			</Layout>
		</Context.Provider>
  );
}

export default App;
