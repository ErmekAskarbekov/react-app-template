import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "screens/home";
import Add from "screens/add";
import About from "screens/about";
import Contacts from "screens/contacts";
import Post from "screens/post";
import Edit from "screens/edit";

const RoutesList: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/new-post' element={<Add/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/post/:id' element={<Post/>}/>
            <Route path='/post/:id/edit' element={<Edit/>}/>
        </Routes>
    );
};

export default RoutesList;