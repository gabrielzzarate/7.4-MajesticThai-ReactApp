var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');

var OrderModel = require('../models/ordershoppingcart.js').OrderItemCollection;

var OrderComponent = React.createClass({
	mixins: [Backbone.React.Component.mixin],
	getInitialState: function() {
	    return {
	    	total: this.getCollection().orderCollection.cartTotal()


	};
},

	handleClick: function(item){

		this.props.removeCartItem(item);
		this.props.totalCartItems(item);

	},

	render: function() {
		var orderCollection = this.getCollection().orderCollection;
		var cartItem = function(item){
			return (
				<li className="order-item" key={item.get('cid')}>
					<span className="order-tite">{item.get('title')} </span>
					<span className="order-price">${item.get('price')}</span>
					<a onClick={this.handleClick.bind(this, item)}><span className="fa fa-times remove-order-btn"></span></a>

				</li>
				);
		};

		return (
			<div className="cart col-md-12">
				<div className="row ">
				<div className="cart-header">
						<h3>Your Order</h3>
				</div>
				<div className="cart-item-list">

							<ul>

										{orderCollection.map(cartItem.bind(this))}

							</ul>
				</div>

{/*
					<div className="col-md-12 takeoutordelivery">
						<div className="col-md-6 delivery">
							<span><i className="cart-icon fa fa-car"></i></span><br/>
							<label htmlFor="delivery">Delivery</label><br/>
							<input id="delivery" type="radio" />
						</div>
						<div className="col-md-6 takeout">
							<span><i className="cart-icon fa fa-shopping-bag"></i></span><br/>
							<label htmlFor="takeout">Takeout</label><br/>
							<input id="takeout" type="radio" />
						</div>
					*/}


					</div>
					<div className="row">

						<div className="makeorder col-md-4 col-md-offset-7">

							<span>total: ${this.state.total}</span>

							<span><button className="btn btn-default">Order</button></span>
						</div>
				</div>
				</div>



		);

}
});


module.exports = {
	"OrderComponent": OrderComponent
};

