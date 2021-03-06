import React from 'react';

export default class MonthFinder extends React.Component {
  constructor() {
    super();
    this.state = {
      neededMonths: [],
      month: '',
    };

    this.handleMonthFilter = this.handleMonthFilter.bind(this);
  }

  filterByMonth(date) {
    const allMatches = this.props.content
      .filter(transaction => +transaction.date.split('-')[1] === +date);
    this.setState({ neededMonths: allMatches });
  }

  displayMonth() {
    return this.state.neededMonths.map((day, i) => {
      return (
        <li
          key={i}
          className='transaction-box'
        >
          <h3 className='whom'>{day.whom}</h3>
          <h2 className='amount'>${day.amount}</h2>
          <h2 className='date'>{day.date}</h2>
          <button
            onClick={ () => this.handleDelete(day.key) }
            className='delete-button'
          >Delete</button>
        </li>
      );
    });
  }

  handleDelete(transactionId) {
    const filteredTransByMonth = this.state.neededMonths.filter((transaction) => {
      return transaction.key !== transactionId;
    });
    this.setState({ neededMonths: filteredTransByMonth }, () => {
      this.props.deleteContent(transactionId);
    });
  }

  displayMonthlyAmount() {
    const amounts = this.state.neededMonths.map(day => +day.amount);
    return (amounts.reduce((a, b) => a + b, 0));
  }

  handleMonthFilter(e) {
    this.filterByMonth(e.target.id);
    this.setState({ month: e.target.innerText });
  }

  showMonthlyAmt() {
    return (
      this.state.month !== '' ?
      <h2>
        All The Flow I Owe in {this.state.month}: ${this.displayMonthlyAmount().toLocaleString()}
      </h2>
      : null
    );
  }

  render() {
    return (
      <div>
        <h2>Monthly Transactions:</h2>
        <nav className='month-buttons'>
          <button onClick={this.handleMonthFilter} id={1}>January</button>
          <button onClick={this.handleMonthFilter} id={2}>February</button>
          <button onClick={this.handleMonthFilter} id={3}>March</button>
          <button onClick={this.handleMonthFilter} id={4}>April</button>
          <button onClick={this.handleMonthFilter} id={5}>May</button>
          <button onClick={this.handleMonthFilter} id={6}>June</button>
          <button onClick={this.handleMonthFilter} id={7}>July</button>
          <button onClick={this.handleMonthFilter} id={8}>August</button>
          <button onClick={this.handleMonthFilter} id={9}>September</button>
          <button onClick={this.handleMonthFilter} id={10}>October</button>
          <button onClick={this.handleMonthFilter} id={11}>November</button>
          <button onClick={this.handleMonthFilter} id={12}>December</button>
        </nav>
        <span className='flow-i-owe'>{ this.showMonthlyAmt() }</span>
        <ul className='transaction-list'>{this.displayMonth()}</ul>
      </div>
    );
  }
}
