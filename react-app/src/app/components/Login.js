import React from 'react';
import AuthService from "../services/auth-service";


class Login extends React.Component {

    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        
        this.state = {
            username: "",
            password: ""
        }
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
    }
    
    onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();
    
        AuthService.login(this.state.username, this.state.password).then(
        () => {
            window.location.reload();
        },
        error => {
            const resMessage =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        }
        );
      }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.onChangeUsername}/>
                </label>
                <label>
                    Password:
                    <input type="text" value={this.state.password} onChange={this.onChangePassword}/>
                </label>

                <input type="submit" value="Login" />
            </form>
        )
    }
}

export default Login;