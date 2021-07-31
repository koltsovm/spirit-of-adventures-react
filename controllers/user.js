const User = require('../models/user.model');

exports.signup = async (req, res) => {};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email, password });

    if (!existingUser) {
      return res.status(500).json({ success: false, error: 'No such user' });
    }
    // TODO complete login logic
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};
