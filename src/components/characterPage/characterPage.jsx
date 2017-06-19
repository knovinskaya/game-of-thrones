import React from 'react';
import CharacterCard from '../characterCard/characterCard';
import bemCn from 'bem-cn-fast';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { characterClick } from '../../actions/app';
import { getCharacters } from '../../selectors/characters';
import './characterPage.css';

const b = bemCn('character-page');
class CharacterPage extends React.PureComponent {
    render() {
        const { params: { name }, characters } = this.props;
        const character = characters && characters[name] || {};
        const { mother, father, heir} = character;

        return (
            <div className={ b() }>
                { this.renderCharacter(character, 'Character') }
                { characters[father] && this.renderCharacter(characters[father], 'Father') }
                { characters[mother] && this.renderCharacter(characters[mother], 'Mother') }
                { characters[heir] && this.renderCharacter(characters[heir], 'Heir') }
            </div>
        );
    }

    renderCharacter(character, role) {
        const { characterClick } = this.props;
        return (
            <div className={ b('role') }>
                <span className={ b('role-name') }>{ role }</span>
                <CharacterCard
                    onClick={ () => characterClick(character.name) }
                    character={ character }
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        characters: getCharacters(state)
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    { characterClick }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage)
