const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json())

app.use(cors());

app.use(require('./router'));

const port = 3333;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});