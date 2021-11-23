import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Home, NavBar} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)