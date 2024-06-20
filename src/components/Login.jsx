import React, { useState, useEffect } from 'react';
import styles from '../style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';


const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const [users, setUsers] = useState([]);
 

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:3000/getUsers', { Coder})
  //     .then(response => {
  //       setUsers(response.data);
  //       console.log(response.data)
  //     })
  //     .catch(error => console.error(error));
  // }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // You can perform form submission logic here
    // Reset form after submission

    
    try {
      const response = await axios.post('http://127.0.0.1:3000/getUsers', formData);

     
      console.log(response.data );

      console.log('Login successful:',  response.status);
       if(response.status === 200){
        alert('Login successful')
           Cookies.set('isLoggedIn', 'true', { expires: 1 }); // Expires in 1 day
           navigate('/account'); 
      setIsLoggedIn(true); // Update isLoggedIn state
       }

   
      // Optionally, you can redirect the user or perform other actions for successful registration
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed')
      // Optionally, you can handle the error or display an error message to the user
    }

    



    // setFormData({
    //   email: '',
    //   password: '',
    // });
  };

  return (
    <div className="max-w-lg mx-auto py-20 md:py-0 lg:py-0 px-10 bg-white rounded-3xl">
      <h1 className={`text-black ${styles.heading2} mb-4`}>Sign in</h1>
      <form onSubmit={handleSubmit} className='pb-4'>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <p className='mb-4 heading-text'>Reset Password</p>
        <button
          type="submit"
          className="bg-purple font-poppins text-white px-4 text-[20px] rounded-[10px] transition-colors w-full py-2"
        >
          Sign In
        </button>
      </form>
      <p>Don't have an account? <a href="./signup" className='heading-text'>Sign Up</a></p>
    </div>
  );
};

export default Login;