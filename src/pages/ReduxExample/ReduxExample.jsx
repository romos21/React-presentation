// libs imports
import React from 'react';
import GuyCars from "./GuyCars/GuyCars";
import {store} from "./store";
import {Provider} from 'react-redux'
import './ReduxExample.css';


// components

const ReduxExample = props => {
    return (
        <Provider store={store}>
            <GuyCars/>
        </Provider>
    );
};

export default ReduxExample;