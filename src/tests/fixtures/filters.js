import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'data',
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: '',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };