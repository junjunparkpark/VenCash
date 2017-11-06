var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/VenCash', { useMongoClient: true });
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Mongoose for VenCash successfully connected!');
});

var User = mongoose.model('User', { username: String, password: String, todos: [] });


module.exports = User;