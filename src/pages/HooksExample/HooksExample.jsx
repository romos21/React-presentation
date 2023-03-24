// libs imports
import React, {useState} from 'react';


// components

const HooksExample = props => {

    const [currentTab, setCurrentTab] = useState('useState')

    return (
        <div>
            <h1>Hooks Example</h1>
            <div className='tabs'>
                <button>useState</button>
            </div>
        </div>
    );
};

export default HooksExample;