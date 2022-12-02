import React, {FC, PropsWithChildren} from 'react';
import {linksList} from 'utils/list';
import Header from "components/UI/Header";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header links={linksList}/>
            <main id='main' className='container mx-auto py-2'>
                {children}
            </main>
        </>

    );
};

export default Layout;