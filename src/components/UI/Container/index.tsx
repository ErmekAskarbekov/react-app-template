import React, {FC, PropsWithChildren} from 'react';

const Container: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='container mx-auto px-[15px]'>
            {children}
        </div>
    );
};

export default Container;