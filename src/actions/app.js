import { createActions } from 'redux-actions';
import { push } from 'react-router-redux';

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
    const name = characterName.replace(/\s/g, "_");
    console.log(`/character/${name}`);
    return push(`/character/${name}`);
}