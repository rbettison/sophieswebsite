import React from 'react';
import artEntryService from '../services/artEntryService';
import styles from '../../css/artentry.module.css';

class ArtEntry extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tile: {}
        }
    }

    componentDidMount() {
        artEntryService.getArtworkEntryById(this.props.match.params.id).then((tile) => {
            this.setState({tile : tile})
        });
    }

    render() {
        return (
            <div className="contentContainer">
                <h1 className="title">{this.state.tile.title}</h1>
                <img className="image" src={this.state.tile.image} />
                <div>
                    <p className="description">{this.state.tile.description}</p>
                </div>
            </div>
        );
    }
}

export default ArtEntry;