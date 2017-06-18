import { createActions } from 'redux-actions';

export const { getPageInfo, characterClick, scrollWindow } = createActions({
    getPageInfo: handleGetPageInfo,
    characterClick: handleCharacterClick,
    scrollWindow: () => ({})
});

function handleGetPageInfo(pageNumber) {
    return fetch(`https://api.got.show/api/characters/`)
        .then((response) => response.json());
}

function handleCharacterClick(characterName) {
    return { currentCharacter: characterName }
}