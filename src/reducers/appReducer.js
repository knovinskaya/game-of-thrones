import { handleActions } from 'redux-actions';

const appReducer = handleActions({
    getPageInfo: handleGetPageInfo
}, {});

function handleGetPageInfo(state, action) {
    return {
        ...state,
        characters:  action.payload
    };
}

export default appReducer;