// libs imports
import React, {useState, useEffect} from 'react';

import './Europe.css'

import Belarus from "./Belarus/Belarus";
import Germany from "./Germany/Germany";
import Cyprus from "./Cyprus/Cyprus";

// components

const Europe = props => {
    console.log('Component Europe rendered...')

    const [newCountry, setNewCountry] = useState(false)

    const setUnsetCountry = () => {
        setNewCountry(!newCountry)
    }

    return (
        <div className='component'>
            <div className='component-content'>
                Europe
                <button onClick={setUnsetCountry}>
                    {newCountry ? 'Remove Country' : 'Add Country'}
                </button>
            </div>
            <div className='children'>
                <Belarus/>
                <Cyprus/>
                { newCountry && <Germany/> }
            </div>
        </div>
    );
};

export default Europe;