import thunk from 'redux-thunk';
import {
    LOAD_INFO_REQUESTED,
    LOAD_INFO_OK,
    LOAD_INFO_FAIL
} from '../../constants/userInfo.js';

const defaultState = { loading: true, info: null, errors: null };

export default function info(state = defaultState, action) {
    switch (action.type) {

        case LOAD_INFO_REQUESTED:
            return { loading: true };

        case LOAD_INFO_OK:
            return { loading: false, info: action.info, errors: null };

        case LOAD_INFO_FAIL:
            return { loading: false, info: null, errors: action.errors };

        default:
            return state;
    }
}