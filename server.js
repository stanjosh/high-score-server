const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

if (!fs.existsSync('./highscore.json')) {
    fs.writeFileSync('./highscore.json', JSON.stringify([
        {
            "name": "josh",
            "score": 100
        },
        {
            "name": "phil",
            "score": 200
        }
    ]));
}


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/highscore", (req, res) => {
    fs.createReadStream('./highscore.json').pipe(res);
});

app.post("/highscore", async (req, res) => {
    var newScore = req.body;
    highScoreFile.push(newScore);
    fs.writeFile('./highscore.json', JSON.stringify(highScoreFile), (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.send("Score added");
});



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