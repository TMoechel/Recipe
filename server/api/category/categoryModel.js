var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create the schema definition
var CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
});

//create the mongoose model and export it
module.exports = mongoose.model('category', CategorySchema);
