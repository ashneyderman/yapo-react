import React from 'react';
import { RouteHandler } from 'react-router';
import SearchGithub from './SearchGithub';

var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        <nav className='navbar navbar-default' role='navigation'>
          <div className='col-sm-7 col-sm-offset-2' style={{mamrginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
        <div className='container'>
          <RouteHandler {...this.props}/>
        </div>
      </div>
      )
  }
});

export default Main;
