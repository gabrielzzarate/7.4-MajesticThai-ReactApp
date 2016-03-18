var Backbone = require('backbone');

var OrderItem = Backbone.Model.extend({
	defaults: {
		title: '',
		price: ''
	}

});

var OrderItemCollection = Backbone.Collection.extend({
	model: OrderItem,
	//url:
});


module.exports = {
	"OrderItem": OrderItem,
	"OrderItemCollection": OrderItemCollection
};
