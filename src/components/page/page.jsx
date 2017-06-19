import React from 'react';
import bemCn from 'bem-cn-fast';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { characterClick } from '../../actions/app';
import { getCurrentPageInfo } from '../../selectors/characters';

import CharacterCard from '../characterCard/characterCard'

import './page.css';

const b = bemCn('page');

class Page extends React.PureComponent {
    render() {
        const { info } = this.props;

        if(!info) return(<div />);
        return (
            <div className={ b() }>
                { this.renderCaracterCards() }
            </div>
        );
    }

    renderCaracterCards() {
        const { info, characterClick } = this.props;

        return info.map( character =>
            <CharacterCard
                onClick={ () => characterClick(character.name) }
                character={ character }
            />
        );
    }
}

const mapStateToProps = state => {
    const { number } = state.app.currentPage;
    return {
        info: getCurrentPageInfo(state),
        number
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    { characterClick }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page)
