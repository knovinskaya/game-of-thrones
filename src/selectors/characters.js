import { createSelector } from 'reselect';

const getCharactersWithImages = (state) => {
    const { characters = [] } = state.app;
    return characters.filter( value => !!value.imageLink);
};
const getCurrentPage = (state) => state.app.currentPage.number;
export const getCharacters = (state) => {
    const { characters = [] } = state.app;
    return characters.reduce((acc, item) => {
        acc[item.name] = item;
        return acc;
    }, {});
};

export const getCurrentPageInfo = createSelector(
    [getCharactersWithImages, getCurrentPage ],
    (characters, page) => {
        return characters.slice(0, page * 40);
    }
);
