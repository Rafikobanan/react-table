import React from 'react';
import { uid } from './utils';
import { SET_IS_FIRST, SET_IS_LOADING, SET_DATA, SORT_BY_KEY, FIND_BY_STRING, SET_IS_ERROR, SET_CARD, CHANGE_CURRENT_CARD } from "./types";

export default function(state, action) {
	switch (action.type) {
		case SET_IS_FIRST:
			return {
				...state,
				isFirst: action.payload
			};

		case SET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload
			};

		case SET_IS_ERROR:
			return {
				...state,
				isError: action.payload
			};

		case SET_DATA:
			const dataWithUid = [...action.payload].map((item) => ({
				...item,
				uid: item.uid || uid()
			}));

			return {
				...state,
				data: dataWithUid,
				dataToShow: dataWithUid,
				card: {
					header: <>Выбран пользователь: <b>{dataWithUid[0].firstName} {dataWithUid[0].lastName}</b></>,
					description: `${dataWithUid[0].description}`,
					data: [
						<>Адрес проживания: <b>{dataWithUid[0].address.streetAddress}</b></>,
						<>Город: <b>{dataWithUid[0].address.city}</b></>,
						<>Провинция/штат: <b>{dataWithUid[0].address.state}</b></>,
						<>Индекс: <b>{dataWithUid[0].address.zip}</b></>
					]
				}
			};

		case SORT_BY_KEY:
			const key = action.payload.key;
			let sortedData = [...state.dataToShow];
			let data = [...state.data];

			if (state.lastSortedKey === key) {
				sortedData.reverse();
				data.reverse();
			} else {
				const sortFunc = (a, b) => {
					if (typeof a[key] === 'number') return a[key] - b[key];

					if (a[key] > b[key]) return 1;
					if (a[key] < b[key]) return -1;

					return 0;
				};

				sortedData.sort(sortFunc);
				data.sort(sortFunc);
			}

			return {
				...state,
				data,
				dataToShow: sortedData,
				lastSortedKey: key
			};

		case FIND_BY_STRING:
			const dataToShow = state.data.filter((obj) => {
				return state.columnKeys.some((key) => {
					return obj[key].toString().toLowerCase().includes(action.payload.toLowerCase());
				});
			});

			return {
				...state,
				dataToShow
			};

		case SET_CARD:
			const cardData = [...state.data].find((obj) => obj.uid === action.payload);

			return {
				...state,
				card: {
					uid: cardData.uid,
					header: <>Выбран пользователь: <b>{cardData.firstName} {cardData.lastName}</b></>,
					description: `${cardData.description}`,
					data: [
						<>Адрес проживания: <b>{cardData.address.streetAddress}</b></>,
						<>Город: <b>{cardData.address.city}</b></>,
						<>Провинция/штат: <b>{cardData.address.state}</b></>,
						<>Индекс: <b>{cardData.address.zip}</b></>
					]
				}
			};

		case CHANGE_CURRENT_CARD:
			return {
				...state,
				data: state.data.map((item) => {
					if (item.uid === state.card.uid) item = {
						...item, ...action.payload
					};

					return item;
				}),
				dataToShow: state.dataToShow.map((item) => {
					if (item.uid === state.card.uid) item = {
						...item, ...action.payload
					};

					return item;
				}),
				card: {...state.card, ...action.payload}
			};
		default:
			return state;
	}
}