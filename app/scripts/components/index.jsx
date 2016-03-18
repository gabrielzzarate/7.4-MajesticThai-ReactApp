var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');
//local
var models = require('../models/menu.js');
var MenuSectionComponent = require('./menusection.jsx').MenuSection;



// menu component that holds the state of the application

var MenuComponent = React.createClass({
	mixins: [Backbone.React.Component.mixin],
	getInitialState: function() {
		return {
			category: 'appetizers'
		};
	},
	setDataCategory: function(category){
		this.setState({"category": category});
	},

	render: function() {
		return (
			<div className="page-header col-md-7 col-md-offset-1">
					<h1>Our Menu</h1>

	  		<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
			  <div className="panel panel-default">
			    <div className="panel-heading menu-section-container" role="tab" id="headingOne">
			      <h4 className="panel-title">
			        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
			            Popular Items
			        </a>
			      </h4>
			    </div>
			    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
			      <div className="panel-body">
			       		<MenuSectionComponent collection={this.props.collection} category={this.state.category} />
			      </div>
			    </div>
			  </div>
			  <div className="panel panel-default">
			    <div className="panel-heading menu-section-container" role="tab" id="headingTwo">
			      <h4 className="panel-title">
			        <a onClick={this.setDataCategory.bind(this, "appetizers")} className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
			          Appetizers
			        </a>
			      </h4>
			    </div>
			    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
			      <div className="panel-body">
			        	<MenuSectionComponent collection={this.props.collection} category ={this.state.category} />
			      </div>
			    </div>
			  </div>
			  <div className="panel panel-default">
			    <div className="panel-heading menu-section-container" role="tab" id="headingThree">
			      <h4 className="panel-title">
			        <a onClick={this.setDataCategory.bind(this, "entrée")} className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			          Entrees
			        </a>
			      </h4>
			    </div>
			    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
			      <div className="panel-body">
			       		<MenuSectionComponent collection={this.props.collection} category = {this.state.category} />
			      </div>
			    </div>
			  </div>
			  <div className="panel panel-default">
			    <div className="panel-heading menu-section-container" role="tab" id="headingFour">
			      <h4 className="panel-title">
			        <a onClick={this.setDataCategory.bind(this, "Side Orders")} className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			          Side Orders
			        </a>
			      </h4>
			    </div>
			    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
			      <div className="panel-body">
			       		<MenuSectionComponent collection={this.props.collection} category = {this.state.category} />
			      </div>
			    </div>
			  </div>
			</div>
			  </div>

		);
	}

});




module.exports = {
 "MenuComponent": MenuComponent
};
