export default (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((total, currentNum) => total + currentNum, 0);
};