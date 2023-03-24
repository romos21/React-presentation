import './MemoExample.css';
import CatPost from "./Posts/CatPost";
import ReactPost from "./Posts/ReactPost";
import ShrekPost from "./Posts/ShrekPost";
import React, {useState} from "react";

function MemoExample() {

    const [shrekLikes, setShrekLikes] = useState(0);
    const [catLikes, setCatLikes] = useState(0);
    const [reactLikes, setReactLikes] = useState(0);

  return (
    <div className="App">
        <div>
            <CatPost likes={catLikes}/>
            <button onClick={() => setCatLikes(catLikes + 1)} className='like-btn'>I Love Cats!</button>
        </div>
        <div>
            <ReactPost likes={reactLikes}/>
            <button onClick={() => setReactLikes(reactLikes + 1)} className='like-btn'>I Love React!</button>
        </div>
        <div>
            <ShrekPost likes={shrekLikes}/>
            <button onClick={() => setShrekLikes(shrekLikes + 1)} className='like-btn'>I Love Shrek!</button>
        </div>
    </div>
  );
}

export default MemoExample;
