import React from 'react';

import Header from '../header/header';

import './app.css';

export default class App extends React.PureComponent {
    render() {
        return (
            <div>
                <Header />
                { this.props.children }
            </div>

        );
    }
}