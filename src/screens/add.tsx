import React, {ChangeEvent, useState} from 'react';
import Container from "components/UI/Container";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import FireBase from "utils/axios";

const Add = () => {
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
            await FireBase.post('posts.json', values);
            setLoading(false);
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