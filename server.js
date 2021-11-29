
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.status(200).sendFile('/index.html');
});

app.post('/solve', (req, res) => {
    res.status(200).json(req.body);
})

app.listen(PORT, () => {
    console.log('listening on: ', PORT);
})