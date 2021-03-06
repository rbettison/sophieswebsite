import React from 'react';
import artEntryService from '../services/artEntryService';
import styles from '../../css/artentry.module.css';
import AuthService from '../services/auth-service';
import _ from 'lodash';
const BASE_IMAGE_URL = "https://sophie-website-bucket.s3.eu-west-2.amazonaws.com/";

class ArtEntry extends React.Component {

    constructor(props) {
        super(props)
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.updateTile = this.updateTile.bind(this);
        this.createTile = this.createTile.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.state = {
            tile: {
                id:'',
                title:'',
                description:'',
                image:''
            },
            imageFile: {},
            currentUser: AuthService.getCurrentUser(),
            update: false,
            create: false
        }
    }

    componentDidMount() {
        if(this.props.match.params.id!='new') {
            artEntryService.getArtworkEntryById(this.props.match.params.id).then((tile) => {
                this.setState({tile : tile})
            });
            if(this.state.currentUser) {
                this.setState({
                    update:true
                })
            }
        } else if (this.state.currentUser) {
            this.setState({
                create: true
            })
        }
    }

    updateTile() {
        artEntryService.uploadImage(this.state.imageFile).then((res) =>{
            artEntryService.updateArtworkEntry(this.state.tile).then(tile => {
                console.log('Tile updated: ' + tile);
                window.location.reload();
            });
        });
    }

    createTile() {
        var model = {
            title:null,
            description:null,
            image:null
         };
        var newTile = _.pick(this.state.tile, _.keys(model));

        artEntryService.uploadImage(this.state.imageFile).then(() =>{
            artEntryService.createArtworkEntry(newTile).then(tile => {
                console.log('Tile created: ' + tile);
                this.props.history.push("/art/" + tile.id);
                window.location.reload();
            });
        })
    }

    onChangeTitle(e) {
        this.setState({
            tile: {
                  ...this.state.tile,
                  title: e.target.value
            }
        })
    }

    onChangeDescription(e) {
        this.setState({
            tile: {
                ...this.state.tile,
                description: e.target.value
            }
        })
    }

    onChangeImage(e) {
        const files = e.target.files;
        if(files && files.length > 0) {
            const file = files[0];
            this.setState({
                tile: {
                    ...this.state.tile,
                    image: file.name
                },
                imageFile: file,
            });
        } else {
            this.setState({imageFile: {}})
        }
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className="contentContainer">
                {
                    !currentUser && 
                    <div>
                        <h1 className="title">{this.state.tile.title}</h1>
                        <img className="image" src={BASE_IMAGE_URL + this.state.tile.image} />
                        <div>
                            <p className="description">{this.state.tile.description}</p>
                        </div>
                    </div>
                }
                {
                    currentUser &&
                    <div>
                        <input type="text" value={this.state.tile.title} onChange={this.onChangeTitle}/>
                        {/* <img className="image" src={BASE_IMAGE_URL + this.state.tile.image} /> */}
                        <input type="file" id="upload-img" name="img" accept="image/*" onChange={this.onChangeImage}/>
                        <input type="text" value={this.state.tile.description} onChange={this.onChangeDescription} />
                        <br/>
                        {this.state.update && <button onClick={this.updateTile}>UPDATE</button>}
                        {this.state.create && <button onClick={this.createTile}>CREATE</button>}
                    </div>

                }


            </div>


        );
    }
}

export default ArtEntry;