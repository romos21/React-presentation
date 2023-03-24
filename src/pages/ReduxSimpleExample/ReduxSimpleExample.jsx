// libs imports
import React from 'react';
import {store} from "./store";
import {Provider} from 'react-redux'
import Solider from "./Solider/Solider";
import './ReduxSimpleExample.css'

// components

const ReduxSimpleExample = props => {
    return (
        <Provider store={store}>
            <Solider/>
        </Provider>
    );
};

export default ReduxSimpleExample;