import { handleActions } from 'redux-actions';

const appReducer = handleActions({
    getPageInfo: handleGetPageInfo,
    characterClick: handleCharacterClick
}, {});

function handleGetPageInfo(state, action) {
    return {
        ...state,
        characters:  action.payload
    };
}

function handleCharacterClick(state, action) {
    return {
        ...state,
        currentCharacter:  action.payload.currentCharacter
    };
}

export default appReducer;