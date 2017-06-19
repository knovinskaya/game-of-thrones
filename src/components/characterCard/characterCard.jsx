import React from 'react';
import bemCn from 'bem-cn-fast';

import './characterCard.css';

const b = bemCn('caracter-card');

export default class CharacterCard extends React.PureComponent {
    render() {
        const { character: { name, imageLink}, onClick } = this.props;

        return (
            <div
                onClick={ onClick }
                className={ b() }
            >
                { name }
                { imageLink &&
                    <img
                        className={ b('image') }
                        src={ `https://api.got.show/${ imageLink }` }
                    />
                }
            </div>
        );
    }
}