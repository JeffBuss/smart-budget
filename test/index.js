import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/Application';
import Frequency from '../lib/components/Frequency';
import LogInOut from '../lib/components/LogInOut';
import Quotes from '../lib/components/Quotes';
import Transactions from '../lib/components/Transactions';

describe("Application", () => {

  it('should render as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });

  it('should have props', () => {
    const wrapper = mount(<Application user={'gucci'}/>);
    expect(wrapper.prop('user')).to.equal('gucci');
    //add props here
  });
});

describe('Frequency', () => {
  const wrapper = shallow(<Frequency />);

  it('should render as a <div>', () => {
    assert.equal(wrapper.type(), 'div');
  });
});

describe('LogInOut', () => {
  const wrapper = shallow(<LogInOut />);

  it('should render as a <div>', () => {
    assert.equal(wrapper.type(), 'div');
  });
});

describe('Quotes', () => {
  const wrapper = shallow(<Quotes />);

  it('should render as a <div>', () => {
    assert.equal(wrapper.type(), 'div');
  });
});

describe('Transactions', () => {
  const wrapper = shallow(<Transactions />);

  it('should render as a <div>', () => {
    assert.equal(wrapper.type(), 'div');
  });
});
