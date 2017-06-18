import React from 'react';

import Header from '../header/header';
import Page from '../page/page'

import './app.css';

export default class App extends React.PureComponent {
    render() {
        return (
            <div>
                <Header />
                <Page />
            </div>

        );
    }
}