import React from 'react';
import Entry from '../components/Entry';
import styles from '../../css/homepage.module.css';
import artEntryService from '../services/artEntryService';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tiles: []
        }
    }

    componentDidMount() {
        artEntryService.getArtworkEntries().then((tiles) => {
            this.setState({tiles : tiles})
        });
    }

    render() {
        return (
            <div className="gallery-section">
                <div className="inner-width">
                <div className="gallery">
                    {this.state.tiles.map((tile) => {
                    return (
                        <Entry key={tile.id} title={tile.title} id={tile.id} image={tile.image}></Entry>
                        )
                    })}
                </div>
                </div>
            </div>
        );  
    }
}

export default Home;