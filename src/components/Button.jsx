import React from 'react';

const Button = ({ label = 'See More', className }) => {
    return (
        <button
            type="submit"
            className={`bg-purple font-poppins text-white px-4 text-[20px] rounded-[10px] transition-colors w-full py-2 ${className}`}
        >
            {label}
        </button>
        
    );
};

export default Button;