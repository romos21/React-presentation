import React, {memo} from 'react'
import reactPost from '../../../assets/images/posts/reactPost.png'
import './post.css'

let renderCount = 0

export default memo(function ReactPost({likes}) {
    console.warn('Render React Post Component:', ++renderCount)
    return (
        <div className="post">
            <img src={reactPost} alt='react'/>
            <h2>React is sooo cooool!!!</h2>
            <div className='likes-container'>
                <p>Likes: {likes}</p>
            </div>
        </div>
    );
})
