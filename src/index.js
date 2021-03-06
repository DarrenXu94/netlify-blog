import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { ContentfulStore } from './contexts/ContentfulContext'

ReactDOM.render(
    <Router>
        <ContentfulStore>
            <App />
        </ContentfulStore>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
