import React from 'react';
import { RouteHandler } from 'react-router';
import SearchGithub from './SearchGithub';

var Main = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <div className='container'>
          <RouteHandler {...this.props}/>
        </div>
      </div>
      )
  }
});

export default Main;
