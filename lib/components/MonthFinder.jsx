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
    return this.state.neededMonths.map((day, i) =>{
      return (
        <li key={i}>
          <h2>{day.whom}</h2>
          <h2>{day.amount}</h2>
          <h2>{day.date}</h2>
        </li>
      )
    })
  }

  handleMonthFilter(e) {
    this.filterByMonth(e.target.id)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleMonthFilter} id={3}>March</button>
        <ul>{this.displayMonth()}</ul>
      </div>
    )
  }
}
