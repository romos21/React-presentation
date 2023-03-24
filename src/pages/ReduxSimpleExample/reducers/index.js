import actionTypes from "../actions/actionTypes";
import { combineReducers } from 'redux'
import pushUps from '../../../assets/images/soliders/pushUps.gif'
import shooting from '../../../assets/images/soliders/shooting.gif'
import steps from '../../../assets/images/soliders/steps.gif'

const defaultState = {
    currentActionImage: '',
}

const solider = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.DO_PUSH_UPS:
            return {
                ...state,
                currentActionImage: pushUps,
            }
        case actionTypes.DO_SHOOTING:
            return {
                ...state,
                currentActionImage: shooting,
            }
        case actionTypes.DO_STEPS:
            return {
                ...state,
                currentActionImage: steps,
            }
        case actionTypes.RESET_COMMAND:
            return defaultState
        default:
            return state
    }
}

export default combineReducers({
    solider,
})
