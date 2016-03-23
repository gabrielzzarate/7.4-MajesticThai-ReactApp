//3rd party
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');

var OrderModel = require('../models/ordershoppingcart.js').OrderItemCollection;
var OrderComponent = require('./order.jsx').OrderComponent;


var CheckoutComponent = React.createClass({

	mixins: [Backbone.React.Component.mixin],

	removeCheckoutItem: function(item){
		console.log("removing...");
		var orderCollection = this.props.orderCollection;
		orderCollection.remove(item);
	},

	render: function() {

		return (




						<div className="modal fade bs-example-modal-lg" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
						  <div className="modal-dialog modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
						        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						        <h4 className="modal-title" id="myModalLabel">Checkout</h4>
						      </div>
						      <div className="modal-body">
						      	<div className="col-md-4">
						      		<p>pay online build strip authentication here</p>
						      	</div>
						      	<div className="col-md-8">
						      	</div>
						      	<CheckoutItems orderCollection = {this.props.orderCollection} removeCheckoutItem={this.removeCheckoutItem} />

						      </div>
						      <div className="modal-footer">

						        <span className="cart-total">total: ${this.props.total}</span>
										<button type="button" className="btn btn-success">Confirm Order</button>
										 <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						      </div>
						    </div>
						  </div>
						</div>
								);
							}

						});



var CheckoutItems = React.createClass({
	mixins: [Backbone.React.Component.mixin],

	handleClick: function(item){
		this.props.removeCheckoutItem(item);
	},
	render: function() {
		var orderCollection = this.props.orderCollection;
		var checkoutItem = function(item){
		return (
				<li className="order-item" key={item.get('cid')}>
					<span className="order-tite">{item.get('title')} </span>
					<span className="order-price">${item.get('price')}</span>
					<a onClick={this.handleClick.bind(this, item)} ><span className="fa fa-times remove-order-btn"></span></a>

				</li>

		);
	};
	return (
		<div className="cart">
				<div className="cart-header">
						<h5>Order Details</h5>
				</div>
				<div className="cart-item-list">
							<ul>{orderCollection.map(checkoutItem.bind(this))}</ul>
				</div>
	</div>

		);
}
});


module.exports = {
	"CheckoutComponent": CheckoutComponent
};





