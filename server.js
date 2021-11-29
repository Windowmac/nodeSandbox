
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.get('/', (req, res) => {
    res.send('./index.html').status(200);
});

app.post('')

app.listen(PORT, () => {
    console.log('listening on: ', PORT);
})