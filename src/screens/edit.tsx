import React, {ChangeEvent, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import Container from "components/UI/Container";
import {IPost} from "utils/types";
import FireBase from "utils/axios";

const Edit = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState<IPost>({
        title: '',
        description: '',
        date: '',
        id: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setPost((prevState: IPost) => ({
            ...prevState,
            [name]: value
        }));
    }

    const fetchPost = async () => {
        try {
            const {data} = await FireBase.get(`posts/${params.id}.json`);
            setPost(data);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    const editPost = async () => {
        setLoading(true);

        try {
            await FireBase.put(`posts/${params.id}.json`, post);
            setLoading(false);
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPost();
    }, [params.id]);

    return (
        <Container className='max-w-md flex flex-col py-10'>
            <Input
                name='title'
                value={post.title}
                onChange={handleChange}
                placeholder='Title'
            />
            <Input
                name='description'
                value={post.description}
                onChange={handleChange}
                placeholder='Description'
            />
            <Button handleClick={editPost} title='Edit' disabled={loading}/>
        </Container>
    );
};

export default Edit;