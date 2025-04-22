import { useState } from 'react';
import axios from 'axios';

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [phone, setPhone] = useState('');

  const handleFetchOrders = () => {
    axios.get(`https://foodapp-61lg.onrender.com/postorder/${phone}`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  };

  return (
    <div>
      <h1>Order History</h1>
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleFetchOrders}>Fetch Orders</button>

      <div>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id}>
              <h2>Order ID: {order.id}</h2>
              <p>Total Price: ${order.total_price}</p>
              <p>Status: {order.order_status}</p>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
}

export default OrderHistory;
