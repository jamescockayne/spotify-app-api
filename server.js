//Packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Start the express server
const app = express();

const code = 'abcd';

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Endpoints
app.get('/', (req, res) => {res.json('Server is running')})

//Start listening
app.listen(3001, () => {
    console.log(`App running on port 3001`)
});