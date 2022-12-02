import React, {FC, ReactNode} from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

const Container: FC<Props> = ({children, className}) => {
    return (
        <div className={`container mx-auto px-[15px] ${className}`}>
            {children}
        </div>
    );
};

export default Container;