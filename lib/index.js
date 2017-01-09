import React from 'react';
import { render } from 'react-dom';
import Application from './Application';
import firebase from './firebase.js';

require('./css/style.scss');

render(<Application/>, document.getElementById('application'));
