import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userHistory, setUserHistory] = useState([]);
  const [error, setError] = useState(null);
  const userId = '12345';  // Replace with the actual user ID (e.g., from the logged-in user)

  useEffect(() => {
    fetch(`http://localhost:5000/user/history?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          setError(data.message);
        } else {
          setUserHistory(data);
        }
      })
      .catch(error => {
        console.error('Error fetching user history:', error);
        setError('Error fetching user history');
      });
  }, [userId]);

  return (
    <div>
      <h2>User Dashboard</h2>
      {error && <p>{error}</p>}
      <div>
        {userHistory.length > 0 ? (
          <ul>
            {userHistory.map((order, index) => (
              <li key={index}>
                {/* Display order details here */}
                Order ID: {order._id}, Total: {order.totalAmount}
              </li>
            ))}
          </ul>
        ) : (
          <p>No order history found for this user</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
