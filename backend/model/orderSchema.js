const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  items: [{
    item_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MenuItem',
      required: true,
    },
    item_name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  order_status: {
    type: String,
    default: 'pending',
  }
});

module.exports = mongoose.model('Order', orderSchema);
