import { createActions } from 'redux-actions';
import { browserHistory } from 'react-router'

export const { getPageInfo, characterClick, scrollWindow } = createActions({
    getPageInfo: handleGetPageInfo,
    characterClick: handleCharacterClick,
    scrollWindow: () => ({})
});

function handleGetPageInfo() {
    return fetch(`https://api.got.show/api/characters/`)
        .then((response) => response.json());
}

function handleCharacterClick(characterName) {
    const name = encodeURIComponent(characterName);
    return browserHistory.push(`/character/${name}`);
}