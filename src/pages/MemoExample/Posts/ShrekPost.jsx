import React, {memo} from 'react'
import shrekPost from '../../../assets/images/posts/shrekPost.jpeg'
import './post.css'

let renderCount = 0

export default memo(function ShrekPost({likes}) {
    console.warn('Render Shrek Post Component:', ++renderCount)
    return (
        <div className="post">
            <img src={shrekPost}
                 alt='shrek'/>
            <h2>This is Shrek</h2>
            <div className='likes-container'>
                <p>Likes: {likes}</p>
            </div>
        </div>
    );
})



