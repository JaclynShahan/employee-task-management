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

app.get('/api/getMessage', (req,res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getMessage(req.query.messages)
   io.emit('msgs', messages)
   res.status(200).send("Done")
   console.log(req.query)
})



app.post('/api/newMessage', (req,res) => {
    messages.push(req.body.messages)
    io.emit('msgs', messages)
    res.status(200).send("Done")
    console.log(req.body)
})

let interval;

io.on("connection", socket => {
    console.log("New Client Connected");
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
    server.listen(port, () => console.log(`Server listening on port ${port}`))
})