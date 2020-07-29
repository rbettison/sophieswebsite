import React from 'react';
import styles from '../../css/entry.module.css';

class Entry extends React.Component {

    render() {

        return (
        <a className="image">
            <div className="entryImage">
            <p className="entryTitle">{this.props.title}</p>
            <img src={this.props.image} />
            </div>
        </a>
        );
    }
}

export default Entry;