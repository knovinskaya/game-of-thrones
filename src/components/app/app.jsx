import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Header from '../header/header';
import { getPageInfo } from '../../actions/app';

import './app.css';

 class App extends React.PureComponent {
    componentDidMount() {
        this.props.getPageInfo();
    }

    render() {
        return (
            <div>
                <Header />
                { this.props.children }
            </div>

        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(
    { getPageInfo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
