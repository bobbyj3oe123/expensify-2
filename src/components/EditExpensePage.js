import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  handleSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  handleRemoveExpense = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          handleSubmit={this.handleSubmit}
        />
        <button onClick={this.handleRemoveExpense}>
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: (id) => dispatch(removeExpense({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);