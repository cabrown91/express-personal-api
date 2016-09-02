var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var ShowsSchema = new Schema({
    name: String,
    network: String,
    description: String,
    image: String,
  });

  var Shows = mongoose.model('Shows', ShowsSchema);

  module.exports.Shows = Shows;
