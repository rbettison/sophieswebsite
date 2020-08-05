import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

class Welcome extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
