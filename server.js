
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
const path = require('path');
const bigConcat = require('./bigConcat');

app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.status(200).sendFile('/index.html');
});

app.post('/subArray', (req, res) => {
    const arr = req.body.userInput.split('');
    const k = 3;
    for(let i = 0; i < arr.length; i += k){
        let left = i;
        //handles the case that k is not a multiple of arr.length
        let right = Math.min(i + k - 1, arr.length - 1);
        let temp;
        while(left < right) {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    res.status(200).json(arr);
})

app.post('/bigConcat', (req, res) => {
    console.log(req.body);
    const arr1 = req.body.userInput1.split('').map((num) => parseInt(num));
    const arr2 = req.body.userInput2.split('').map((num) => parseInt(num));
    const arr3 = req.body.userInput3.split('').map((num) => parseInt(num));
    res.status(200).json(bigConcat(arr1, arr2, arr3));
})

app.listen(PORT, () => {
    console.log('listening on: ', PORT);
})