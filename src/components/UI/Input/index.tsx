import React, {FC, InputHTMLAttributes} from 'react';

const Input:FC<InputHTMLAttributes<HTMLInputElement>> = ({className ,...props}) => {
    return (
        <input
            className={
                `outline-0 border-2 border-gray-600 
                shadow-inner shadow-md rounded-xl 
                px-2 py-1 
                placeholder:text-gray-600
                mb-2
                ${className}`}
            {...props}
        />
    );
};

export default Input;