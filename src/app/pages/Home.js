import React from 'react';
import Entry from '../components/Entry';
import styles from '../../css/homepage.module.css';

class Home extends React.Component {
    render() {

        const entries = ['Art Post 1', 'Art Post 2', 'Art Post 3'];
        return (
            <div className="gallery-section">
                <div className="inner-width">
                <div className="gallery">
                    {entries.map((value, index) => {
                    return (
                        <Entry key={index} title={value} id={index}></Entry>
                        )
                    })}
                </div>
                </div>
            </div>
        ); 
    }
}

export default Home;