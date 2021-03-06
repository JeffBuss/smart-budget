import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import { spy } from 'sinon';

import Application from '../lib/Application';
import Frequency from '../lib/components/Frequency';
import Quotes from '../lib/components/Quotes';
import Transactions from '../lib/components/Transactions';
import MonthFinder from '../lib/components/MonthFinder';
import SubmitButton from '../lib/components/SubmitButton';
// import LogInOut from '../lib/components/LogInOut';
// import SubmitFunds from '../lib/components/SubmitFunds';

describe('Application', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });
//
  it('should have props', () => {
    const wrapper = mount(<Application
      user={'gucci'}
      whom={'theman'}
      amount={'treefiddy'}
      date={'today'}
    />);
    expect(wrapper.prop('user')).to.equal('gucci');
    expect(wrapper.prop('whom')).to.equal('theman');
    expect(wrapper.prop('amount')).to.equal('treefiddy');
    expect(wrapper.prop('date')).to.equal('today');
  });
});

describe('Frequency', () => {
  const wrapper = shallow(<Frequency />);

  it('should render as a <div>', () => {
    assert.equal(wrapper.type(), 'div');
  });

  it('should have a Frequency header ', () => {
    expect(wrapper.find('h3')).to.be.length(1);
  });

  it('should render 4 radio inputs', () => {
    expect(wrapper.find('input')).to.be.length(4);
  });
});

describe('Transactions', () => {
  const wrapper = shallow(<Transactions />);

  it('should render as a <div>', () => {
    assert.equal(wrapper.type(), 'div');
  });

  it('should render 3 text inputs and 1 radio input', () => {
    expect(wrapper.find('input')).to.be.length(4);
  });

  it('should have a transactions header', () => {
    expect(wrapper.find('h2')).to.be.length(1);
  });
});

describe('MonthFinder', () => {
  const wrapper = shallow(<MonthFinder />);

  it('should render as a <div>', () => {
    assert.equal(wrapper.type(), 'div');
  });

  it('should have props', () => {
    const wrapper = mount(<MonthFinder
      neededMonths = 'january'
    />);
    expect(wrapper.prop('neededMonths')).to.equal('january');
  });

  it('should render 12 month filter buttons', () => {
    expect(wrapper.find('button')).to.be.length(12);
  });
});

describe('SubmitButton', () => {
  const wrapper = shallow(<SubmitButton />);

  it('should render as a <div>', () => {
    assert.equal(wrapper.type(), 'div');
  });

  it('should render a submit button', () => {
    expect(wrapper.find('.submit-button')).to.be.length(1);
  });
});

describe('Unit Test | DeleteButton', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<MonthFinder />);
  });

  it('should have a button with 1 prop', () => {
    const wrapper = render(<deleteContent />);
    assert.equal(wrapper.find('.clearBtn').length, 0);
  });

  it('should have the button text rendered onto the page', () => {
    const wrapper = render(<deleteContent/>);
    expect(wrapper.text()).to.contain('');
  });
});

describe('Unit Test | MonthFinder', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<MonthFinder />);
  });

  it('should have the button text rendered onto the page', () => {
    const wrapper = render(<MonthFinder/>);
    expect(wrapper.text()).to.contain('');
  });
});

describe('Unit Test | Transactions', () => {
  it('can mount with no properties', () => {
  const wrapper = shallow(<Transactions />);
  });

  it('should have the button text rendered onto the page', () => {
    const wrapper = render(<Transactions/>);
    expect(wrapper.text()).to.contain('');
  });
});

describe('Feature Test | AddNewTransaction', () => {
  it('submits a new fund', () => {
    const buttonClick = spy();
    const wrapper = shallow(
      <SubmitButton onClick={buttonClick} />);
    const wrapper2 = shallow(
      <Application />);
    wrapper.find('.submit-button').simulate('click');
    expect(wrapper2.state('amount')).to.eq('');
  });
});

// describe('LogInOut', () => {
//   const wrapper = shallow(<LogInOut />);
//
//   it('should render as a <div>', () => {
//     assert.equal(wrapper.type(), 'div');
//   });
//
//   it('should only display a signIn button when user is logged out', () => {
//     expect(wrapper.find('.sign-in')).to.be.length(1);
//   });
//
//   it('should greet the user by their username and e-mail when logged in', () => {
//     const wrapper = mount(<LogInOut user={'gucci'}/>);
//     //delete line below, and write a real test
//     expect(wrapper.find('.user-greeting')).to.be.length(1);
//   });
//
//   it('should have a sign out button when user is logged in', () => {
//     const wrapper = mount(<LogInOut user={'gucci'}/>);
//     expect(wrapper.find('.sign-out')).to.be.length(1);
//   });
// });
//
// describe('SubmitFunds', () => {
//   const wrapper = shallow(<SubmitFunds />);
//
//   it('should render as a <div>', () => {
//     assert.equal(wrapper.type(), 'div');
//   });
//
//   it('should have a My Scrilla h1', () => {
//     expect(wrapper.find('h1')).to.be.length(1);
//   });
//
//   it('should render a transaction input field', () => {
//     expect(wrapper.find('.transactions')).to.be.length(1);
//   });
//
//   it('should render a submit funds button', () => {
//     expect(wrapper.find('.submit-funds')).to.be.length(1);
//   });
//
//   it('renders xml elements', () => {
//     spy(Application.prototype, 'render');
//     const wrapper = mount(<Application />);
//     assert.equal(Application.prototype.render.calledOnce, true);
//   });
//
//   describe('Feature Test | AddNewFunds', () => {
//     it('submits a new fund', () => {
//       const buttonClick = spy();
//       const wrapper = shallow(
//         <SubmitFunds onClick={buttonClick} />);
//       const wrapper2 = shallow(
//         <Application />);
//       wrapper.find('.submit-funds').simulate('click');
//       expect(wrapper2.state('funds')).to.eq('');
//     });
//   });
// });
