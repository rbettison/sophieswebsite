import React from 'react';
import artEntryService from '../services/artEntryService';
import styles from '../../css/artentry.module.css';
import AuthService from '../services/auth-service';

class ArtEntry extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tile: {},
            currentUser: AuthService.getCurrentUser()
        }
    }

    componentDidMount() {
        artEntryService.getArtworkEntryById(this.props.match.params.id).then((tile) => {
            this.setState({tile : tile})
        });

    }

    updateTile() {
        console.log('updateing');
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className="contentContainer">
                {
                    !currentUser && 
                    <div>
                        <h1 className="title">{this.state.tile.title}</h1>
                        <img className="image" src={this.state.tile.image} />
                        <div>
                            <p className="description">{this.state.tile.description}</p>
                        </div>
                    </div>
                }
                {
                    currentUser &&
                    <div>
                        <input value={this.state.tile.title} />
                        <img className="image" src={this.state.tile.image} />
                        <input value={this.state.tile.description} />
                        <br/>
                        <button onClick={this.updateTile}>UPDATE</button>
                    </div>

                }


            </div>


        );
    }
}

export default ArtEntry;