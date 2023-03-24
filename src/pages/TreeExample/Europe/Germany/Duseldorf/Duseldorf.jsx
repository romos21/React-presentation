// libs imports
import React, {useState} from 'react';


// components

const Duseldorf = props => {

    console.log('Component Duseldorf rendered...')

    const [cityName, setCityName] = useState('Duseldorf')

    const changeCity = () => {
        if ('Duseldorf' === cityName) {
            setCityName('Dortmund')
        } else {
            setCityName('Duseldorf')
        }
    }

    return (
        <div className='component'>
            <div className='component-content'>
                {cityName}
                <button onClick={changeCity}>
                    Change city
                </button>
            </div>
        </div>
    );
};

export default Duseldorf;