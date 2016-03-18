var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');

var OrderModel = require('../models/ordershoppingcart.js').OrderItemCollection;

var OrderComponent = React.createClass({
	render: function() {
		return (
			<div className="cart">
				<div className="cart-header">
						<h3>Your Order</h3>
				</div>
				<div className="cart-item-list">
					<table className="table cart-table">
							<tbody>
								<tr>
									<th>Item</th>
									<th>Price</th>
									<th></th>
									<th>Quantity</th>
								</tr>
								<tr>
									<td>
										<strong>Subtotal</strong>
									</td>
									<td>
										<strong>$0.00</strong>
									</td>
								</tr>
							</tbody>
					</table>
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


					</div>
				</div>
			</div>

		);
	}
});

ReactDOM.render (
  	<OrderComponent collection={OrderModel} />,
  	$('#orderApp')[0]);


module.exports = OrderComponent;

