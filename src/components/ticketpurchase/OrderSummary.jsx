import React, { useState } from 'react'
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import Button from '../Button';
import { ticketTypes } from '../../constants';

const OrderSummary = () => {

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
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const [priceChange, setPriceChange] = useState('');

    return (
        <div className={`my-4 md:mx-4 lg:mx-4 flex-auto p-[15px] w-full md:w-20 lg:w-20 justify-center items-center text-primary h-full rounded overflow-hidden shadow-md`}>
            <h1 className='mb-4 font-poppins font-medium text-[18px]'>Order Summary:</h1>
            {ticketTypes.map((ticketType) =>
                ticketType.ticketDetails?.map((ticketDetail, x) => (
                    <div key={x} className={`p-4 text-black items-center flex gap-x-2 border-b border-custom-purple`}>
                        <div>
                        </div>
                        <div className="flex-auto w-40 justify-start flex ">
                            <h4>{ticketDetail.class}</h4>
                        </div>
                        <div className="w-32 flex-auto text-right ">
                            <h4>{ticketDetail.price}</h4>
                        </div>
                        <div className='flex flex-auto gap-x-2 w-28  justify-end items-center h-full text-primary font-medium '>
                            {/* Minus icon */}
                            <div onClick={decrement} className='flex-1 h-full flex justify-center items-center px-2 cursor-pointer'>
                                <FiMinusCircle />
                            </div>
                            <div className='h-full flex justify-center items-center px-2' >{count}</div>
                            <div onClick={increment} className='flex-1 h-full flex justify-center items-center px-2 cursor-pointer'>
                                <FiPlusCircle />
                            </div>
                        </div>
                    </div>
                )))}
            <div className="p-4 text-black items-center flex gap-x-2 border-b border-custom-purple">
                <p className='font-semibold '>Subtotal</p>

            </div>
            <div className="p-4 text-black items-center flex gap-x-2 border-b border-custom-purple">
                <p className='font-semibold '>Admin Fee</p>

            </div>
            <div className="p-4 text-black items-center flex gap-x-2 border-b border-custom-purple">
                <p className='font-semibold '>Total</p>

            </div>
            <div className="p-4 text-black items-center flex gap-x-2 border-b">
                <p className='font-semibold '>Refund Policy</p>

            </div>
            <div>
                <form onSubmit={handleSubmit}>

                    <Button label='Make payment' />
                </form>
            </div>
        </div>
    )
}

export default OrderSummary