// App.js
import React from 'react';
import Profile from './Profile';
import { Analytics } from '@vercel/analytics/react';

function App() {
    return (
        <div className="App">
            <Profile />
            <Analytics id="ANALYTICS_ID" />
        </div>
    );
}

export default App;