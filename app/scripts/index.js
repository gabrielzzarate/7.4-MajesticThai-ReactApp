var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

var models = require('./models/menu.js');
var collapse = require('./collapse.js');
var tooltip = require('./tooltip.js');
var router = require('./router');




$(function(){

  Backbone.history.start();
   $('[data-toggle="tooltip"]').tooltip();
});
