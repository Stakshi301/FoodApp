const MenuItem = require('../model/menuSchema');

const getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createMenuItem = async (req, res) => {
    console.log('Received data:', req.body); // Log incoming request data
  
    try {
      const item = new MenuItem(req.body); 
      const savedItem = await item.save(); // Save the item 
      console.log("Item saved:", savedItem); // Log the saved item
  
      res.status(201).json(savedItem);
    } catch (err) {
      console.error("Error saving item:", err); // Log any error message
      res.status(400).json({ message: err.message });
    }
  };
  
  

module.exports = { getAllMenuItems, createMenuItem };
