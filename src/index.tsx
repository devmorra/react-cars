import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Dashboard, Home, NavBar, SignIn} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard data={[{}]} />}/>
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)