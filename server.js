const express = require('express');

const app = express();
const port = process.argv[0] || process.env.PORT || 9944;

app.get('*', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});