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
        <div>
            {post.title}
        </div>
    )

}


export default PostDetail