import React, {FC, useEffect, useState} from 'react';
import PostCard from "components/PostCard";
import Container from "components/UI/Container";
import FireBase from "utils/axios";
import {IPost} from "utils/types";

const Home: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    const fetchData = async () => {
        try {
            const {data} = await FireBase.get('posts.json');

            const array = Object.keys(data).map((post) => ({id: post, ...data[post]}));
            console.log(data);
            console.log(Object.keys(data));
            console.log(array)

            setPosts(array);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container>
            {posts.length > 0 ? posts.map((post: IPost) => (
                <PostCard key={post.id} {...post}/>
            )) : <p>No posts</p>}
        </Container>
    );
};

export default Home;