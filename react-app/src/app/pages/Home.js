import React from 'react';
import Entry from '../components/Entry';
import styles from '../../css/homepage.module.css';
import artEntryService from '../services/artEntryService';
import AuthService from '../services/auth-service';
const BASE_IMAGE_URL = "https://sophie-website-bucket.s3.eu-west-2.amazonaws.com/";

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tiles: [],
            currentUser: AuthService.getCurrentUser()
        }
    }

    componentDidMount() {
        artEntryService.getArtworkEntries().then((tiles) => {
            this.setState({tiles : tiles})
        });
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className="gallery-section">
                <div className="inner-width">
                <div className="gallery">
                    {this.state.tiles.map((tile) => {
                    return (
                        <Entry key={tile.id} title={tile.title} id={tile.id} image={BASE_IMAGE_URL + tile.image}></Entry>
                        )
                    })}
                </div>
                </div>
                {
                    currentUser &&
                    <a href='/art/new'>ADD</a>
                }
            </div>

        );  
    }
}

export default Home;