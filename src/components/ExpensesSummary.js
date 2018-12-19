import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenses }) => {
  const expenseCount = !expenses ? 0 : expenses.length;
  const expenseText = expenseCount > 1 || expenseCount === 0 ? 'expenses' : 'expense';
  const expensesTotal = getExpensesTotal(expenses);
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h2>
        {`Viewing ${expenseCount} ${expenseText} totalling ${formattedExpensesTotal}`}
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses
});

export default connect(mapStateToProps)(ExpensesSummary);