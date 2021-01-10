//Packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

//Start the express server
const app = express();
const SECRET = process.env.SECRET

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Endpoints
app.post('/', (req, res) => {
    const { code, clientId, redirect } = req.body
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `grant_type=authorization_code&code=${code}&client_id=${clientId}&redirect_uri=${redirect}&client_secret=${SECRET}`
      })
        .then(result => {return result.json()})
        .then(object => res.json(object))
})
//Start listening
app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`)
});