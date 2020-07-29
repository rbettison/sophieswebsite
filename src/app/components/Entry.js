import React from 'react';
import styles from '../../css/entry.module.css';
import image from '../../images/eye.jpg';

class Entry extends React.Component {

    render() {
        return (
        <a className="image">
            <img className="entryImage" src={image} />
        </a>
        );
    }
}

export default Entry;