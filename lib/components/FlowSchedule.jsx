import React from 'react'
import { render } from 'react-dom';
import firebase, { reference } from '../firebase';

export default class FlowSchedule extends React.Component {

  monthFilter(content, 1)

  monthFilter(content, selectedMonth) {
    content.map((transaction, i) => {
      if (transaction.month === selectedMonth) {
        console.log('yo');
        // selectedMonth.push(transaction);
      }
    });
  }

  render() {
    const { content } = this.props
    return (
      <div>
        {content.map((content, i) => {
          return (
            <article key={i}>
              <p className='flow-schedule-name'>{content.whom}</p>
              <p className='flow-schedule-amount'>${content.amount}</p>
              <p className='flow-schedule-date'>{content.date}</p>
            </article>
          )
        })}
      </div>
    )
  }
}
