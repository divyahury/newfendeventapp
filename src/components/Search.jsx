import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [formData, setFormData] = useState({ country: '' });

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleKeyPress = (e) => {
        // Trigger search if Enter key is pressed
        if (e.key === 'Enter') {
            onSearch(searchQuery);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center justify-center">
            <input
                type="text"
                value={searchQuery}
                placeholder="Search..."
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="mt-1 p-2 border rounded-l w-full focus:outline-none"
            />
            <div className="h-auto hidden lg:flex items-center bg-white px-1 mt-1">
                <IoSearchSharp size={40} className="text-gray-500 p-2" />
            </div>
            <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 p-3 h-[40px] bg-white rounded-l w-full hidden lg:flex focus:outline-none"
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
            <button
                type="submit"
                className="bg-purple text-[20px] h-[40px] items-center justify-center text-white px-2 hidden md:flex lg:flex  rounded-lg transition-colors focus:outline-none"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
