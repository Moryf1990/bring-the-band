import Backbone from 'backbone';
import BandModel from './../models/BandModel.js';

const ChosenBands = Backbone.Collection.extend({
	model: BandModel,
	url: 'http://tiny-za-server.herokuapp.com/collections/bands'
});

let myBands = new ChosenBands();

export default myBands;