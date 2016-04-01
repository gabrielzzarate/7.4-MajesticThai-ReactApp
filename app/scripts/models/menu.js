var Backbone = require('backbone');

var MenuItem = Backbone.Model.extend({
	defaults: {
		title: '',
		desc: '',
		price: '',
		reviews: ''
	}

});

var MenuCollection = Backbone.Collection.extend({
	model: MenuItem,
	//url:
});


module.exports = {
	"MenuItem": MenuItem,
	"MenuCollection": MenuCollection
};
