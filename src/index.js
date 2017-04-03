import React from 'react';
import ReactDOM from 'react-dom';
import MasterPage from './components/FrontPage';
import './components/App.css';

ReactDOM.render(<MasterPage showThisPage="Main" showProfile="No"/>,
    document.getElementById('slide')
);