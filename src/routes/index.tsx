import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "screens/home";
import Add from "screens/add";
import About from "screens/about";
import Contacts from "screens/contacts";

const RoutesList: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
    );
};

export default RoutesList;