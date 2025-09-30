import React from 'react';
import Privacy from './Privacy';
import Profile from './Profile';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
                <Analytics id="ANALYTICS_ID" />
            </div>
        </Router>
    );
}

export default App;
