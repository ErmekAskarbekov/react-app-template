import React, {ChangeEvent, useState} from 'react';
import Container from "components/UI/Container";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import FireBase from "utils/axios";
import {useNavigate} from "react-router-dom";

const Add = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        title: '',
        description: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const newPostRequest = async () => {
        setLoading(true);
        try {
            const date = Date.now();
            await FireBase.post('posts.json', {date: new Date(date).toDateString(), ...values});
            setLoading(false);
            navigate('/');
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }

    return (
        <Container className='max-w-md flex flex-col py-10'>
            <Input
                name='title'
                value={values.title}
                onChange={handleChange}
                placeholder='Title'
            />
            <Input
                name='description'
                value={values.description}
                onChange={handleChange}
                placeholder='Description'
            />
            <Button handleClick={newPostRequest} title='Add post' disabled={loading}/>
        </Container>
    );
};

export default Add;