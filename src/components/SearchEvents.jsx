import React, { useState, useRef, useEffect } from 'react';
import styles from '../style';
import { Search } from './';
import { IoFilter } from 'react-icons/io5';

const SearchEvents = () => {
    const [formData, setFormData] = useState({ country: '' });
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedTicket, setSelectedTicket] = useState('');
    const [dropDown, setDropDown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropDown = () => {
        setDropDown(!dropDown);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handlePriceChange = (e) => {
        setSelectedPrice(e.target.value);
    };

    const handleTicketChange = (e) => {
        setSelectedTicket(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search Query:', formData.country);
        console.log('Selected Date:', selectedDate);
        console.log('Selected Price:', selectedPrice);
        console.log('Selected Ticket:', selectedTicket);
        // Perform search logic based on formData, selectedDate, selectedPrice, and selectedTicket
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDropDown(false);
        }
    };

    const handleOptionClick = (e) => {
        // Prevent the dropdown from closing when clicking inside the dropdown content
        e.stopPropagation(); // Stop the event from bubbling up to the outside click handler
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <section className={`${styles.padding} ${styles.flexCenter} bg-secondarycolor grid grid-cols-2 sm:px-10 px-6 sm:py-4 py-4`}>
            <div className='flex flex-cols-2 items-center'>
                <p className={`${styles.paragraph} hidden lg:flex text-pink mr-2`}>Reset Filter</p>
                <div onClick={toggleDropDown} className="flex bg-customPurple px-4 py-2 text-[18px] border-solid border-2 rounded-xl items-center ">
                    <div className={`flex h-full cursor-pointer mr-2`}>
                        <p className="text-dimWhite">Filter </p>
                    </div>
                    <div className='h-full flex cursor-pointer text-dimWhite'>
                        <IoFilter />
                    </div>
                    {dropDown && (
                        <div ref={dropdownRef} className={`${styles.padding} bg-white w-full absolute z-10 top-44 bottom-100 right-2 left-2 border border-gray-200 rounded-md shadow-lg`} onClick={handleOptionClick}>
                            <div className='grid grid-row-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4'>
                                <div className='w-full mr-4 md:col-span-2 lg:col-span-2'>
                                    <p className={`text-black ${styles.paragraph} font-semibold mb-4`}>Event Type</p>
                                    <form onSubmit={handleSearch} className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                                        <select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            className="mt-1 p-3 h-[40px] bg-white rounded-l w-full lg:flex focus:outline-none border border-gray-200"
                                            required
                                        >
                                            <option disabled value="">
                                                Select Country
                                            </option>
                                            <option value="USA">USA</option>
                                            <option value="Canada">Canada</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="Nigeria">Nigeria</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </form>
                                </div>
                                {/* Date Selection */}
                                <div className='w-full mr-4 px-2'>
                                    <p className={`text-black ${styles.paragraph} font-semibold mb-4`}>Date</p>
                                    <form onSubmit={handleSearch} className="flex-row items-center justify-center">
                                        <div className='flex'>
                                            <input
                                                type="radio"
                                                id="adate"
                                                name="date"
                                                value="adate"
                                                className="mr-2"
                                                checked={selectedDate === 'adate'}
                                                onChange={handleDateChange}
                                            />
                                            <label htmlFor="adate" className="mr-4">Any Date</label>
                                        </div>
                                        <div className='flex'>
                                            <input
                                                type="radio"
                                                id="thisweek"
                                                name="date"
                                                value="thisweek"
                                                className="mr-2"
                                                checked={selectedDate === 'thisweek'}
                                                onChange={handleDateChange}
                                            />
                                            <label htmlFor="thisweek" className="mr-4">This Week</label>
                                        </div>
                                        <div className='flex'>
                                            <input
                                                type="radio"
                                                id="thisweekend"
                                                name="date"
                                                value="thisweekend"
                                                className="mr-2"
                                                checked={selectedDate === 'thisweekend'}
                                                onChange={handleDateChange}
                                            />
                                            <label htmlFor="thisweekend" className="mr-4">This Weekend</label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                id="nxtweek"
                                                name="date"
                                                value="nxtweek"
                                                className="mr-2"
                                                checked={selectedDate === 'nxtweek'}
                                                onChange={handleDateChange}
                                            />
                                            <label htmlFor="nxtweek">Next Week</label>
                                        </div>
                                    </form>
                                </div>
                                {/* Price Selection */}
                                <div className='w-full mr-4 px-2'>
                                    <p className={`text-black ${styles.paragraph} font-semibold mb-4`}>Price</p>
                                    <form onSubmit={handleSearch} className="flex-row items-center justify-center">
                                        <div className='flex'>
                                            <input
                                                type="radio"
                                                id="anyprice"
                                                name="price"
                                                value="Any Price"
                                                className="mr-2"
                                                checked={selectedPrice === 'Any Price'}
                                                onChange={handlePriceChange}
                                            />
                                            <label htmlFor="anyprice" className="mr-4">
                                                Any Price
                                            </label>
                                        </div>
                                        <div className='flex'>
                                            <input
                                                type="radio"
                                                id="paidevent"
                                                name="price"
                                                value="Paid Event"
                                                className="mr-2"
                                                checked={selectedPrice === 'Paid Event'}
                                                onChange={handlePriceChange}
                                            />
                                            <label htmlFor="paidevent" className="mr-4">Paid Events</label>
                                        </div>
                                        <div className='flex'>
                                            <input
                                                type="radio"
                                                id="freeevent"
                                                name="price"
                                                value="Free Event"
                                                className="mr-2"
                                                checked={selectedPrice === 'Free Event'}
                                                onChange={handlePriceChange}
                                            />
                                            <label htmlFor="freeevent" className="mr-4">Free Events</label>
                                        </div>
                                    </form>
                                </div>
                                {/* Ticket Type Selection */}
                                <div className='w-full mr-4 px-2'>
                                    <p className={`text-black ${styles.paragraph} font-semibold mb-4`}>Ticket Type</p>
                                    <form onSubmit={handleSearch} className="flex-row items-center justify-center">
                                        <div className='flex'>
                                            <input
                                                type="radio"
                                                id="anytype"
                                                name="ticket"
                                                value="Any Type"
                                                className="mr-2"
                                                checked={selectedTicket === 'Any Type'}
                                                onChange={handleTicketChange}
                                            />
                                            <label htmlFor="anytype" className="mr-4">
                                                Any type
                                            </label>
                                        </div>
                                        <div className='flex'>
                                            <input
                                                type="radio"
                                                id="refundable"
                                                name="ticket"
                                                value="Refundable"
                                                className="mr-2"
                                                checked={selectedTicket === 'Refundable'}
                                                onChange={handleTicketChange}
                                            />
                                            <label htmlFor="refundable" className="mr-4">Refundable</label>
                                        </div>
                                        <div className='flex'>
                                            <input
                                                type="radio"
                                                id="nonrefundable"
                                                name="ticket"
                                                value="Non Refundable"
                                                className="mr-2"
                                                checked={selectedTicket === 'Non Refundable'}
                                                onChange={handleTicketChange}
                                            />
                                            <label htmlFor="nonrefundable" className="mr-4">Non-refundable</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-5  lg:flex">
                                    <button
                                        type="submit" onClick={handleSearch}
                                        className="bg-purple text-[18px] py-2 items-center justify-center text-white px-4 mr-4 rounded-lg transition-colors focus:outline-none"
                                    >
                                        Apply Filters
                                    </button>
                                    <button
                                        type="submit"
                                        onClick={toggleDropDown}
                                        className=" bg-white hover:bg-customPurple hover:text-white px-4 py-2 h-[45px] text-[18px] border-solid border-2 rounded-[10px] transition-colors items-center justify-center"
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
            <div className='grid'>
                <Search />
            </div>

        </section>

    )
}

export default SearchEvents


