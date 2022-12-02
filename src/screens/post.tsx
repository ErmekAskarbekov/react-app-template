import React, {FC, useEffect, useState} from 'react';
import FireBase from "utils/axios";
import {useNavigate, useParams} from "react-router-dom";
import Container from "components/UI/Container";
import Button from "components/UI/Button";
import {IPost} from "utils/types";

const Post: FC = () => {
    const params = useParams();
    const [post, setPost] = useState<IPost | null>(null);
    const navigate = useNavigate();

    const fetchData = async (id: string | undefined) => {
        try {
            const {data} = await FireBase.get(`posts/${id}.json`);
            setPost(data);
        } catch (e) {
            console.log(e);
        }
    }

    const removePost = async () => {
        try {
            await FireBase.delete(`posts/${params.id}.json`);
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData(params.id);
    }, [params]);

    return (
        <Container>
            {post && <>
                <h1><b>Title: </b> {post.title}</h1>
                <p><b>Description: </b> {post.description}</p>
                <p><b>Date: </b> {post.date}</p>
                <Button handleClick={removePost} title='Remove'/>
                <Button handleClick={() => navigate(`/post/${params.id}/edit`)} title='Edit'/>
            </>}
        </Container>
    );
};

export default Post;