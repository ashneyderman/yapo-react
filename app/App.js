import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

Router.run(routes, (Root, states) => {
  React.render(<Root {...states} />, document.getElementById('app'));
});