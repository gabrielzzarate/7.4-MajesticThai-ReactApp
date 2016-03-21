var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');




var MenuSection = React.createClass({
	mixins: [Backbone.React.Component.mixin],
	getInitialState: function() {
	    return {
	        total: this.getCollection().orderCollection.cartTotal()

	    };
	},

	handleOrder: function(item){
		var orderCollection = this.getCollection().orderCollection;
		this.props.addMenuItem(item);
		this.props.totalCartItems(item);
		this.setState({total: orderCollection.cartTotal()});

	},
	render: function() {
		var menuItems = function(item) {
			return (

					<div key={item.get("cid")} className="col-md-6">
					<div>
							<div className="menu-item-title">
							<h4 className="menu-item-content">{item.get("title")}</h4><p className="item-price">${item.get("price")}</p>
							</div>
							<p className="item-description">{item.get("description")}</p>

							<a onClick={this.handleOrder.bind(this, item)} className="add-to-cart-btn"><i className="fa fa-plus-square-o add-icon"></i></a>

					</div>
				</div>

				);
		};
		var getMenuItems = function(item){
			return item.get("category") == this.props.category;
		};

		var menuCollection = this.getCollection().menuCollection;

		return (
			<div className="menuItems">
				{(menuCollection.filter(getMenuItems.bind(this)).map(menuItems.bind(this)))}
			</div>
			);
	}
});

module.exports = {
	"MenuSection" : MenuSection
};
