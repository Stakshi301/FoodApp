// const User = require('../model/userSchema');
// const Order = require('../model/orderSchema');
// const MenuItem = require('../model/menuSchema'); // Assuming you already have this schema for the menu items

// const createOrder = async (req, res) => {
//   const { name, email, phone, cart, total_price } = req.body;

//   try {
//     // Save or get the existing user
//     let user = await User.findOne({ email });
//     if (!user) {
//       user = new User({ name, email, phone });
//       await user.save();
//     }

//     // Create a new order
//     const order = new Order({
//       user: user._id,
//       total_price,
//       items: cart.map(item => ({
//         item_id: item._id,
//         item_name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//         image:item.imageURL
//       })),
//     });

//     await order.save();

//     res.status(201).json({ message: 'Order placed successfully', order });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error placing the order' });
//   }
// };


// module.exports={createOrder};



const Order = require('../model/orderSchema'); // Your Order model
const ObjectId = require('mongoose').Types.ObjectId; // If you're using MongoDB ObjectIds

const createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;  // Assuming userId, items, and totalAmount are passed in the request body

    const newOrder = new Order({
      user: new ObjectId(userId),  // Ensure userId is an ObjectId
      items: items,  // Array of items being ordered
      totalAmount: totalAmount,  // Total price of the order
    });

    const savedOrder = await newOrder.save();
    console.log('Order saved:', savedOrder);  // Log the saved order for debugging

    res.status(201).json(savedOrder);  // Return the created order as a response
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Error placing order' });
  }
};

module.exports = {createOrder};
