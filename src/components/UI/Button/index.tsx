import React, {FC} from 'react';
import './styles.css';

interface Props {
    handleClick: () => void;
    title: string;
    disabled?: boolean;
}

const Button:FC<Props> = ({handleClick, title, disabled}) => {
    return (
        <button className="btn-process" disabled={disabled} onClick={handleClick}>
            {!disabled && title}
            {disabled && <span className="btn-ring"></span>}
        </button>
    );
};

export default Button;