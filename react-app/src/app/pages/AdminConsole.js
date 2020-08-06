import React from 'react';
import AuthService from '../services/auth-service';
import Login from '../components/Login';
import Logout from '../components/Logout';

class AdminConsole extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        }
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div>
            {currentUser && <Logout />}
            {!currentUser && <Login />}
            </div>
        );
    }
}

export default AdminConsole;