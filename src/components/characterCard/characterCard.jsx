import React from 'react';
import bemCn from 'bem-cn-fast';

import './characterCard.css';

const b = bemCn('caracterCard');

export default class CharacterCard extends React.PureComponent {
    render() {
        const { character, onClick } = this.props;

        return (
            <div
                onClick={ onClick }
                className={ b() }
            >
                { character.name }
                <img
                    className={ b('image') }
                    src={ `https://api.got.show/${character.imageLink}` }
                />
            </div>
        );
    }
}