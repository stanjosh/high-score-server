const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
    res.send('Hello, world!');
});

var server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

function shutDown() {
    server.close(() => {
        process.exit(0);
    });

    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
}