var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');


var MenuSection = React.createClass({
	mixins: [Backbone.React.Component.mixin],

	render: function() {
		var menuItems = function(item) {
			return (
					<div key={item.get("cid")}>
							<h4>{item.get("title")}</h4>
							<p>{item.get("description")}</p>
							<span className="item-price">${item.get("price")}</span>
							<span><a href="#"><i className="fa fa-plus-square-o add-icon"></i></a></span>

					</div>
				);
		};
		var getMenuItems = function(item){
			return item.get("category") == this.props.category;
		};
		return (
			<div className="menuItems">
				{(this.props.collection.filter(getMenuItems.bind(this)).map(menuItems.bind(this)))}
			</div>
			);
	}


});

module.exports = {
	"MenuSection" : MenuSection
};
