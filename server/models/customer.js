var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  createdAt: {type: Date, default: Date.now()},
  updatedAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model("Customer", CustomerSchema);
