import React from 'react';
import Entry from '../components/Entry';
import styles from '../../css/homepage.module.css';
import tileData from '../../data/tiles.json';

class Home extends React.Component {
    render() {

        const entries = ['Art Post 1', 'Art Post 2', 'Art Post 3'];
        return (
            <div className="gallery-section">
                <div className="inner-width">
                <div className="gallery">
                    {tileData.map((tile) => {
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