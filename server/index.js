const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const axios = require('axios');
const massive = require('massive');
const socketIo = require('socket.io');
const index = require("../routes/index.js");
require('dotenv').config();

app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let messages = [];



app.post('/api/newMessage', (req,res) => {
    messages.push(req.query.message)
    io.emit('msgs', messages)
})

let interval;

io.on("connection", socket => {
    console.log("New Client Connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getMessage(socket), 3000);
    socket.on("disconnect", () => {
        console.log("Client Disconnected");
    })
})
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