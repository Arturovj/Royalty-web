import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../../../services/PostsService';
import './PostDetail.css'

const PostDetail = () => {
    const [post, setPost] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getPost(id)
        .then(post => setPost(post))
    },[])

    console.log(post)

    return (
        <div className='post-container'>
            <div className='post'>
            {post.title}
            <img src={post.image} alt=""></img>
            </div>
        </div>
    )

}


export default PostDetail