import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    render() {
        return (
            <div>
                <h1>Expense List</h1>
                <ul>
                    <li>
                        <label>description</label>
                        <input
                        type="text"
                        value={this.props.filters.text}
                        onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
                        
                        />
                    </li>
                    <li className="sort-by-filter">
                        <label>sort by</label>
                        <label className={this.props.filters.sortBy === 'amount' ? 'active' : ''}>
                            <input
                            type="radio"
                            value="amount"
                            name="amount"
                            checked={this.props.filters.sortBy === 'amount'}
                            onChange={(e) => this.props.dispatch(sortByAmount())}
                            />
                            amount
                        </label>
                        <label className={this.props.filters.sortBy === 'date' ? 'active' : ''}>
                            <input
                            type="radio"
                            value="date"
                            name="date"
                            checked={this.props.filters.sortBy === 'date'}
                            onChange={(e) => this.props.dispatch(sortByDate())}
                            />
                            date
                        </label>
                    </li>
                    <li>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);