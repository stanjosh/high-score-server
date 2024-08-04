const express = require('express');

const app = express();
const port = 9944;

app.get('highscores/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});