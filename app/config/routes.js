var React = require('react');
var Router = require('react-router');
var Main  = require('../components/Main');
var Home  = require('../components/Home');
var TasksRepo  = require('../components/TasksRepo');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <Route name="repo" path="repo/:username" handler={TasksRepo} />
    <DefaultRoute handler={Home} />
  </Route>
);
