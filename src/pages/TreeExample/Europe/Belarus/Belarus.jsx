// libs imports
import React, {useEffect, useState} from 'react';
import Minsk from "./Minsk/Minsk";
import Brest from "./Brest/Brest";


// components

const Belarus = props => {

    console.log('Component Belarus rendered...')

    return (
        <div className='component'>
            <div className='component-content'>
                Belarus
            </div>
            <div className='children'>
                <Minsk/>
                <Brest/>
            </div>
        </div>
    );
};

export default Belarus;