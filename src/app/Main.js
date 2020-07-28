import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

class Main extends React.Component {
    render() {
        return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutsophie" component={About} />
            <Route exact path="/blog" component = {Blog} />
        </Switch>
        );
    }
}

export default Main;