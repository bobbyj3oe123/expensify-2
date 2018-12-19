import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);

  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with 2 or more expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);

  expect(wrapper).toMatchSnapshot();
});