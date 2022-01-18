import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from './ui/App';

// Example starter JavaScript for disabling form submissions if there are invalid fields

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
