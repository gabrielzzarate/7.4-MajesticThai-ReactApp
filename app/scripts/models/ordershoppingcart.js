var Backbone = require('backbone');

var OrderItem = Backbone.Model.extend({
	defaults: {
		title: '',
		price: ''
	}

});

var OrderItemCollection = Backbone.Collection.extend({
	model: OrderItem,
	cartTotal: function(){
		var addOrder = function(item1, item2) {
			return item1 + item2.get('price');
		}
		return this.reduce(addOrder, 0);
	}
	//url:
});


module.exports = {
	"OrderItem": OrderItem,
	"OrderItemCollection": OrderItemCollection
};
