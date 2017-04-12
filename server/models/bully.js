var mongoose = require('mongoose');

var BullySchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  type: {type: String, required: true},
  reports: {type: Array, required: true},
  num_reports: {type: Number, default: 1}
}, {timestamps: true});

var Bully = mongoose.model('Bully', BullySchema);
