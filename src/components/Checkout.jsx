// components/MiniForm.jsx
import React, { useState } from 'react';
import styles, { layout } from "../style"
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import Button from './Button';

const Checkout = () => {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };


  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if( count > 0){
      setCount(count - 1);
    }
  };

  return (
    <div className={`${styles.marginX} p-[15px] w-[300px] justify-center items-center text-primary h-full rounded overflow-hidden shadow-lg`}>
      <h1 className='mb-4 font-poppins font-medium text-[18px]'>Price:</h1>
      <div className='flex flex-1 gap-x-2 max-w-[100px] mb-4 justify-center items-center h-full text-primary font-medium border'>
        {/* Minus icon */}
          <div onClick={decrement} className='flex-1 h-full flex justify-center items-center px-2 cursor-pointer'>
            <IoMdRemove />    
          </div>
          {/* <button onClick={decrement}>-</button> */}
          <div className='h-full flex justify-center items-center px-2' >{count}</div>
          <div onClick={increment} className='flex-1 h-full flex justify-center items-center px-2 cursor-pointer'>
            <IoMdAdd />    
          </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>

          <Button label='Reserve a spot'/>
        </form>
      </div>
        {/* <p className='px-3 py-3 mx-3'>{count}</p>
        <button onClick={increment}>+</button> */}
    </div>
  );
};

export default Checkout;