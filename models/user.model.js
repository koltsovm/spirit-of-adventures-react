const { Schema, model } = require('mongoose');

const User = new Schema({
  routes: [], // TODO type with ref
  createdRoutes: [],
  firstname: { type: String, required: true },
  lastname: String,
  phone: String,
  about: String,
  avatar: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: String,
  favourites: [],
  isAuth: { type: Boolean, default: false },
});

module.exports = model('Users', User);
