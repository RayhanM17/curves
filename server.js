const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve the assets folder for static files like SVGs
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve the CSS file directly from the root
app.use('/main.css', express.static(path.join(__dirname, 'main.css')));

// Serve the HTML file on the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log("Request served by node app");
});

app.listen(port, () => {
    console.log(`Node app is listening on port: ${port}`);
});