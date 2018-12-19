import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  handleDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  handleFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  handleTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  handleSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.handleTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.handleSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.handleDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.handleFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          startDateId='start'
          endDateId='end'
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);