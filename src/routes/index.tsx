import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "screens/home";

const RoutesList = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    );
};

export default RoutesList;