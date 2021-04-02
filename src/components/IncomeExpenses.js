import React from 'react';

export const IncomeExpenses = () => {
	return(
		<div className = "inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className = "plus">+$0.00</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className = "minus">-$0.00</p>
			</div>
		</div>
		)
}