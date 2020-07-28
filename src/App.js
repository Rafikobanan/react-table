import React, { useReducer } from 'react';
import Layout from './hoc/Layout/Layout';
import TablePage from './containers/TablePage';
import reducer from './reducer/reducer';
import { Context } from './context/context';

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
