import React from 'react';
import styles from '../../css/footer.module.css'

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <img className="igImage" src="/images/instaIcon.svg" />
                <a href="https://instagram.com" className="label">soelbet.art</a>
            </div>
        );
    }
}

export default Footer;