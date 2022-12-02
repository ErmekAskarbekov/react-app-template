import React, {FC} from 'react';

interface Props {
    handleClick: () => void;
    title: string;
    disabled?: boolean;
    className?: string;
}

const Button:FC<Props> = ({handleClick, title, disabled, className}) => {
    return (
        <button
            className={
                `outline-[none] rounded-xl bg-blue-700 
                text-white border-0 px-4 py-2 mb-2 transition-all 
                hover:shadow-md hover:opacity-90 disabled:opacity-90 
                ${className}`
        }
            onClick={handleClick}
            disabled={disabled}
        >
            {title}
        </button>
    );
};

export default Button;