
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
const path = require('path');
const bigConcat = require('./bigConcat');
const subArray = require('./subArray');
const sort = require('./sort');

app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.status(200).sendFile('/index.html');
});

app.post('/subArray', (req, res) => {
    const arr = req.body.userInput.split('').map((num) => parseInt(num));
    res.status(200).json(subArray(arr));
})

app.post('/bigConcat', (req, res) => {
    const arr1 = req.body.userInput1.split('').map((num) => parseInt(num));
    const arr2 = req.body.userInput2.split('').map((num) => parseInt(num));
    const arr3 = req.body.userInput3.split('').map((num) => parseInt(num));
    res.status(200).json(bigConcat(arr1, arr2, arr3));
});

app.post('/sort', (req, res) => {
    const arr = req.body.userInput1.split('').map((num) => parseInt(num));
    res.status(200).json(sort(arr));
})

app.listen(PORT, () => {
    console.log('listening on: ', PORT);
})