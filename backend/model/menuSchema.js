// models/MenuItem.js
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String, // e.g., "Drinks", "Sweets", "Junk Food"
    required: true,
  },
  imageUrl: String, // for displaying food image
  available: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);
