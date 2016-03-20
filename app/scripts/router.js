var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

//local
var menuComponent = require('./components/index.jsx').menuComponent;
var MenuSectionComp = require('./components/menusection.jsx');
var MenuModels = require('./models/menu.js');
var menuData = require('./menuJSON.js').menu;
var OrderComponent = require('./components/order.jsx');
var OrderModel = require('./models/ordershoppingcart.js');



// var MenuSection = MenuSectionComp.MenuSection;
// var MenuCollection = new MenuModels.MenuCollection();
// MenuCollection.add(menuData);
// var OrderModel = new OrderModel.OrderItem();
// var OrderComponent = OrderComponent.OrderComponent;


var Router = Backbone.Router.extend({
  routes: {
    '': 'menu',
  },

  menu: function(){
  	ReactDOM.render(
  		menuComponent,
  		$('#menuApp')[0] );
  	}
});

module.exports = new Router();
