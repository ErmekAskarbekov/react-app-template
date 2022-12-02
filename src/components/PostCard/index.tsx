import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {IPost} from "utils/types";

const PostCard:FC<IPost> = ({title, description, id}) => {
    return (
        <div className='min-h-[50px] rounded-xl shadow-md py-3 px-4'>
            <p><b>Title:</b> {title}</p>
            <p><b>Description:</b> {description}</p>
            <NavLink to={`/post/${id}`}> Read me</NavLink>
        </div>
    );
};

export default PostCard;