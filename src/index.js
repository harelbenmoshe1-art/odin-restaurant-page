import { loadHome } from './home.js';

const contentDiv = document.getElementById('content');

// Load the homepage by default
contentDiv.appendChild(loadHome());