// libs imports
import React, {useState, useRef} from 'react';
import headSolider from '../../../assets/images/soliders/headSolider.jpeg'
import arrow from '../../../assets/images/soliders/arrow.png'
import {useDispatch, useSelector} from "react-redux";

import actionTypes from '../actions/actionTypes'

// components

const Solider = props => {

    const [currentActionTitle, setCurrentActionTitle] = useState('')

    const solider = useSelector(state => state.solider)
    const dispatch = useDispatch()

    const doCommand = (e) => {
        e.preventDefault()
        const actionType = e.target.type.value
        setCurrentActionTitle(actionType)
        dispatch({type: actionType})
    }

    const stopCommand = () => {
        setCurrentActionTitle('')
        dispatch({type: actionTypes.RESET_COMMAND})
    }

    return (
        <div className='soliders-sec'>
            <form onSubmit={doCommand}>
                <select name='type'>
                    <option value='DO_PUSH_UPS'>DO PUSH UPS!</option>
                    <option value='DO_SHOOTING'>SHOOT!</option>
                    <option value='DO_STEPS'>GO!</option>
                </select>
                <button>say!</button>
            </form>
            <button onClick={stopCommand}>STOP!</button>
            {
                currentActionTitle &&
                <>
                    <div className='redux-flow-step-wrapper'>
                        <div className='redux-flow-step'>
                            <img className='component-img' src={headSolider} alt='head solider'/>
                            <h2>Head Solider "COMPONENT" says: </h2>
                            <h4>Hey Solider "STORE"! Do ACTION {currentActionTitle}!</h4>
                        </div>
                    </div>
                    <div className='redux-flow-step-wrapper'>
                        <img src={arrow} className='arrow-img' alt='arrow'/>
                        <div className='redux-flow-step'>
                            <h2>Solider "STORE" got an action {currentActionTitle} from "COMPONENT"</h2>
                        </div>
                    </div>
                    <div className='redux-flow-step-wrapper'>
                        <img src={arrow} className='arrow-img' alt='arrow'/>
                        <div className='redux-flow-step'>
                            <h2>Solider "STORE" need to check his skills "REDUCER" what he could do following the
                                command {currentActionTitle} from "COMPONENT"</h2>
                            <ul className='action-types-list'>
                                {
                                    Object.values(actionTypes).map(actionType => (
                                        <li className={actionType === currentActionTitle ? 'active' : ''}
                                            key={actionType}>{actionType}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </>
            }
            { solider.currentActionImage &&
                <div className='redux-flow-step-wrapper'>
                    <img src={arrow} className='arrow-img' alt='arrow'/>
                    <div className='redux-flow-step'>
                        <h2>Solider "STORE" shows the result of request action from "COMPONENT"</h2>
                        <img className='result-action-img' src={solider.currentActionImage} alt={currentActionTitle}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default Solider;