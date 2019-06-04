const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
require('dotenv').config();

app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/createUser', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.createUser(req.body.first_name, req.body.last_name, req.body.username, req.body.password).then((resp) => {
        console.log(resp)
        res.status(200).send(resp)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/api/getUser', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getUser(req.query.username, req.query.password)
    .then((resp) => {
        console.log(resp)
        res.status(200).send(resp)
    })
    .catch((err) => {
        console.log(err)
    })
})


const port = 3052
massive(process.env.connectionString).then(db => {
    app.set('db', db)
    app.listen(port, () => console.log(`Server listening on port ${port}`))
})