import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
	transactions: [
		{id: 1, text: 'Book', amount: -200},
		{id: 2, text: 'Phone', amount: -800},
		{id: 3, text: 'camera', amount: -1000},
		{id: 4, text: 'Salary', amount: 3000}
	]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	return(
		<GlobalContext.Provider value = {{transactions: state.transactions}} >
			{ children }
		</GlobalContext.Provider>
		)
}