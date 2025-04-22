// pages/LandingPage.jsx
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Foodie Express</h1>
      <p className="mb-6 text-lg">Order your favorite meals, fast and fresh!</p>
      <div className="space-x-4">
        <Link to="/signin" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Login
        </Link>
        <Link to="/signup" className="bg-white border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-100">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
