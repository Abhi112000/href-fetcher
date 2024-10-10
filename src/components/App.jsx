// src/components/App.jsx

import React, { useState } from 'react';

const App = () => {
    const [url, setUrl] = useState('');
    const [data, setData] = useState({}); // You can adjust this according to your data structure

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform fetching logic here based on the URL
        // You can update the 'data' state with the fetched results
    };

    return (
        <div>
            <h1>Href Data Fetcher</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL"
                />
                <div className="button-container">
                    <button type="submit">Fetch Links</button>
                    <button type="button" onClick={() => setData({})}>Clear</button>
                </div>
            </form>
            <div className="data-container">
                <div className="data-box">
                    <h2>Fetched Data</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display fetched data */}
                </div>
            </div>
        </div>
    );
};

export default App;
