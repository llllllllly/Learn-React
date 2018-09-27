import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

class Header extends Component {
    render () {
        const isGoodWord = true
        return (
            <div>
                <h1>React 小书
                {isGoodWord 
                ? <strong> is good</strong>
                : <strong> is not good</strong>
              }</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
)