const mongoose = require('mongoose');

const interventionSchema = new mongoose.Schema({
  title: String,
  description:String,
  date: Date,
  status: String
})
module.exports = mongoose.model('Intervention', interventionSchema);
