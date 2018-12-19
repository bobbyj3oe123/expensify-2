import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '123'
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'groceries',
    notes: 'This is a test',
    amount: 10000,
    createdAt: 5000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense',() => {
  const updates = { description: 'Car Payment' };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  };
  const state = expensesReducer(expenses, action);

  expect(state[0].description).toBe(updates.description);
});

test('should not edit an expense not found',() => {
  const updates = { description: 'Car Payment' };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '123',
    updates
  };
  const state = expensesReducer(expenses, action);

  expect(state[0].description).toBe(expenses[0].description);
});