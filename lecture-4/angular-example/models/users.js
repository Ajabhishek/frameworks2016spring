var mongoose = require('mongoose');

var UserSchema = {
  username: "string",
  password: "string",
  name: "string",
  role: "string"
};

var User = mongoose.model("User", UserSchema, "user");

/*
User.remove({}, function(err, data) {
  User.create(
    {
      username: "niha",
      password: "1234",
      name: "Niels Henrik Juul Hansen",
      role: "admin"
    },
    {
      username: "ahin",
      password: "4321",
      name: "Niels Juul Henrik Hansen",
      role: "author"
    }
  )
})
*/

module.exports = User;