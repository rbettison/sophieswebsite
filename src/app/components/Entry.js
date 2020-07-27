import React from 'react';
import styles from '../../css/entry.module.css';
import image from '../../images/eye.jpg';

class Entry extends React.Component {

    render() {
        return (
            <div className="blogEntryContainer">
                {/* <h2>{this.props.title}</h2> */}
                <div className="imageContainer">
                    <p className="imageDescription">This is the description</p>
                    <img className="entryImage" src={image} />
                </div>
            </div>
        );
    }
}

export default Entry;