import React, { useState } from 'react'
import styles, { layout } from "../../style"
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import Button from '../Button';
import { ticketTypes } from '../../constants';

const PurchaseDetails = () => {
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


    // const ticketTypes = [
    //     {
    //         title: "Afrotix",
    //         ticketDetails: [

    //             { class: "Regular", price: "500,000.00", quantity: 1 },
    //             { class: "Vip", price: "500", quantity: 1 },
    //             { class: "Exclusive", price: "500", quantity: 1 }
    //         ]

    //     }
    // ];

    return (

        <div className="flex-auto w-full md:w-80 lg:w-80">
            <div className='m-4'>
                <h2 className={`font-ProximaNova font-medium text-[20px]`}>Select Your Ticket</h2>
            </div>
            <div className='p-2 mb-4 rounded-md justify-center items-center overflow-hidden shadow-md'>
                {ticketTypes?.map((ticketType, i) => (
                    <div key={i} className="px-4">
                        <h2 className={`${styles.heading2}  border-b border-custom-purple`}>{ticketType.title}</h2>

                        {ticketType.ticketDetails?.map((ticketDetail, j) => (
                            <div key={j} className={`p-4 text-black items-center flex gap-x-4 ${j === ticketType.ticketDetails.length - 1 ? "" : " border-b border-custom-purple"}`}>
                                <div className="w-40 justify-start flex">
                                    <h4>{ticketDetail.class}</h4>
                                </div>
                                <div className="w-32 flex-auto text-right">
                                    <h4>{ticketDetail.price}</h4>
                                </div>
                                <div className='flex flex-auto gap-x-2 w-28 justify-end items-center h-full text-primary font-medium '>
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

                        ))}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default PurchaseDetails