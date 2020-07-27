import React from 'react';
import Entry from '../components/Entry';
import styles from '../../css/homepage.module.css';

class Home extends React.Component {
    render() {

        const entries = ['Art Post 1', 'Art Post 2', 'Art Post 3'];
        return (
            <div>
                {entries.map((value, index) => {
                    return <Entry key={index} title={value}></Entry>
                })}
            </div>
        ); 
    }
}

export default Home;