import React from 'react';
import AuthService from "../services/auth-service";

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        AuthService.logout();
    }

    render() {
        return (
        <a href='/admin' onClick={this.logout}>
            Logout
        </a>
        )
    }

}

export default Logout;