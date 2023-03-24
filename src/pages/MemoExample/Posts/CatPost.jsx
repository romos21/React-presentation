import React, {memo} from 'react'
import catPost from '../../../assets/images/posts/catPost.png'
import './post.css'

let renderCount = 0

export default memo(function CatPost({likes}) {
    console.warn('Render Cat Post Component:', ++renderCount)
    return (
        <div className="post">
            <img src={catPost} alt='cat'/>
            <h2>Cats are always funny</h2>
            <div className='likes-container'>
                <p>Likes: {likes}</p>
            </div>
        </div>
    );
})
