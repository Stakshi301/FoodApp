import { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from backend API
    axios.get('https://foodapp-61lg.onrender.com/getmenu')
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching menu items:', error);
      });
  }, []);

  const addToCart = (item) => {
    // Logic to add item to cart (You can use Context API or local state for cart)
    // Example: Add to localStorage or global state for cart
    alert(`Added ${item.name} to cart`);
  };

  return (
    <div>
      <h1>Menu</h1>
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item._id} className="menu-item">
            <img src={item.imageUrl} alt={item.name} 
                  style={{ width: '200px', height: '150px', objectFit: 'cover' }}
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
