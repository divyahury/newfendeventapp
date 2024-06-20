import React, { useState } from 'react';
import styles from '../style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    password: '',
    cpassword: '',
    agree: false, // Changed from string to boolean for checkboxes
    updates: false, // Changed from string to boolean for checkboxes
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value; // Handle checkbox values

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     // Check if the user has agreed to the terms
  if (!formData.agree) {
    alert('Please agree to the Terms and Conditions.');
    return;
  }
    console.log(formData); // Simulate form submission logic

    try {
      const response = await axios.post('http://127.0.0.1:3000/createnew', formData);
      console.log('Registration successful:', response.data);
      Cookies.set('isLoggedIn', 'true', { expires: 1 }); // Expires in 1 day
      navigate('/account'); 
      // Optionally, you can redirect the user or perform other actions for successful registration
    } catch (error) {
      console.error('Registration failed:', error);
      // Optionally, you can handle the error or display an error message to the user
    }
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      password: '',
      cpassword: '',
      agree: false,
      updates: false,
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-4 py-10 px-10 bg-white rounded-3xl ">
      <h1 className={`text-black ${styles.heading2} mb-4`}>Sign up</h1>
      <form onSubmit={handleSubmit} className='my-5'>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
            First Name
          </label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName}
            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
            Last Name
          </label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName}
            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input type="email" id="email" name="email" value={formData.email}
            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-600">
            Country
          </label>
          <select id="country" name="country" value={formData.country}
            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required>
            <option disabled value="">Select your country</option>
            <option value="GB">United Kingdom</option>
            {/* Other country options */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input type="password" id="password" name="password" value={formData.password}
            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cpassword" className="block text-sm font-medium text-gray-600">
            Confirm Password
          </label>
          <input type="password" id="cpassword" name="cpassword" value={formData.cpassword}
            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
          />
          <label htmlFor="agree" className="block text-sm font-medium text-gray-600">
            I Agree to the Terms and Conditions
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="updates"
            name="updates"
            checked={formData.updates}
            onChange={handleChange}
            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
          />
          <label htmlFor="updates" className="block text-sm font-medium text-gray-600">
            I’d like to receive emails from Cokobar about upcoming events in my city, educational resources and updates.
          </label>
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors w-full"
        >
          Create Account
        </button>
      </form>
      <p>Already have an account? <a href="./signin" className='text-blue-500'>Sign in</a></p>
    </div>
  );
};

export default Register;
