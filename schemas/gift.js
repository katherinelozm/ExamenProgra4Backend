var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  name : String,
  description : String,
  weight : String, 
  destination :  String, 
  status : String,
});

module.exports = mongoose.model('Student', StudentSchema);
