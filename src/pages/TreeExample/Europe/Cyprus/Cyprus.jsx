// libs imports
import React, {useEffect, useState} from 'react';
import Limassol from "./Limassol/Limassol";
import Nicosia from "./Nicosia/Nicosia";
import Belarus from "../Belarus/Belarus";
import Germany from "../Germany/Germany";


// components

const Cyprus = props => {

    console.log('Component Cyprus rendered...')

    return (
        <div className='component'>
            <div className='component-content'>
                Cyprus
            </div>
            <div className='children'>
                <Limassol/>
                <Nicosia/>
            </div>
        </div>
    );
};

export default Cyprus;