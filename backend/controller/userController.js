const userModel = require('../model/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Import JWT

// Login function

const login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const userExist = await userModel.findOne({ email });
    if (!userExist) return res.json('User not found, please sign in');

    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    // Generate a token
    const token = jwt.sign(
      { id: userExist._id, email: userExist.email },
      process.env.JWT_SECRET, // Ensure this is your secret
      { expiresIn: '1h' }
    );

    return res.status(200).json({ message: 'User logged in successfully', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Sign-in (signup) function
const signin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const newUser = new userModel({ name, email, password: hashPass });
    await newUser.save();

    res.status(200).json({
      message: 'User signed up successfully',
      newUser,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { login, signin };
