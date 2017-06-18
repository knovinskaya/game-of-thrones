import React from 'react';
import bemCn from 'bem-cn-fast';
import './header.css'

const b = bemCn('header');

export default class Header extends React.PureComponent {
    render() {
        return (
            <div className={ b() }>
                Game Of thrones
            </div>
        );
    }
}