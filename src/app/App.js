import React from 'react';
import Main from './Main';
import Header from './components/Header';
import Entry from './components/Entry';

class App extends React.Component {
    render() {
        return (<div>
            <Header />
            <Main />
        </div>);
    }
}

export default App;