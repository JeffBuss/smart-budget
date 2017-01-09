import React from 'react'

export default class MonthFinder extends React.Component {
  constructor() {
    super()
    this.state = {
      neededMonths: [],
    }

    this.handleMonthFilter = this.handleMonthFilter.bind(this)
  }

  filterByMonth(date) {
    const allMatches = this.props.content
      .filter(transaction => +transaction.date.split('-')[1] === +date)
    this.setState({neededMonths: allMatches})
  }

  displayMonth() {
    return this.state.neededMonths.map((day, i) => {
      return (
        <li key={i}>
          <h2>{day.whom}</h2>
          <h2>${day.amount}</h2>
          <h2>{day.date}</h2>
          <button
            onClick={ () => this.handleDelete(day.key) }
          >Delete</button>
        </li>
      )
    })
  }
  handleDelete(transactionId) {
    let removedItem = this.state.neededMonths.filter((transaction) => {
      return transaction.key !== transactionId;
    });
    this.setState({ neededMonths: removedItem });
    console.log('hi');
  }

  displayMonthlyAmount() {
    const amounts = this.state.neededMonths.map(day => +day.amount)
      return (amounts.reduce((a, b) => a + b, 0))
  }

  handleMonthFilter(e) {
    this.filterByMonth(e.target.id)
  }

  render() {
    return (
      <div>
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
        <h2>Total Monthly Amount: $ {this.displayMonthlyAmount()}</h2>
        <ul>{this.displayMonth()}</ul>
      </div>
    )
  }
}
