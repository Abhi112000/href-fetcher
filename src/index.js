// src/index.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App.jsx'; // Adjust this path to match your structure
// import './styles.css'; // Link to the global styles.css

// // Rendering the App component
// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(<App />);


import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'; // Adjust the path if needed
import './styles.css'; // Import your CSS

// Create a root to render your app
const root = ReactDOM.createRoot(document.getElementById('app'));

// Render your app
root.render(<App />);
