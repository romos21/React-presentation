// libs imports
import React, {useEffect, useState} from 'react';
import Berlin from "./Berlin/Berlin";
import Duseldorf from "./Duseldorf/Duseldorf";


// components

const Germany = props => {

    console.log('Component Germany rendered...')

    const [newCity, setNewCity] = useState(false)

    const setUnsetCity = () => {
        setNewCity(!newCity)
    }

    return (
        <div className='component'>
            <div className='component-content'>
                Germany
                <button onClick={setUnsetCity}>
                    {newCity ? 'Remove City' : 'Add City'}
                </button>
            </div>
            <div className='children'>
                <Berlin/>
                {newCity && <Duseldorf/>}
            </div>
        </div>
    );
};

export default Germany;