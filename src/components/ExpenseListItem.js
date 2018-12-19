import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, dispatch, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>Description: {description}</h3>
    </Link>
    <p>Amount: {amount}</p>
    <p>CreatedAt: {createdAt}</p>
  </div>
);

export default ExpenseListItem;