var mongoose = require('mongoose');

var User = mongoose.model('User', { username: String, password: String });

// var jun = new User({ username: 'junjun123', password: 'password' });

// jun.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });

module.exports = User;
