import Backbone from 'backbone';

const BandModel = Backbone.Model.extend({
	defaults: {
		name: '',
		image: '',
		id: ''
	},
	rootUrl: 'http://tiny-za-server.herokuapp.com/collections/bands',
	idAttribute: '_id'
});

export default BandModel;