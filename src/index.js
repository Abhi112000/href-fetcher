// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx'; // Adjust this path to match your structure
import './styles.css'; // Link to the global styles.css

// Rendering the App component
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
