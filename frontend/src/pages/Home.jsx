import React, { useEffect, useState } from 'react';

const Home = ({ addToCart }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/getmenu')
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
      })
      .catch((error) => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <div className="home-page">
      {menuItems.map((item) => (
        <div key={item._id} className="menu-item">
          <img src={item.imageUrl} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span>{item.price}</span>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
