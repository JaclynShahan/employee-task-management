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

const server = http.createServer(app);

const io = socketIo(server);
app.use(index(io));


        
    let messages = [];
    let tasks = [];
        
io.on("connection", socket => { // each socket that "connects", 
        //is a unique connection from a individual's web browser
    console.log("New Client Connected");
    socket.emit('msgs', messages) // when user connects, automatically emits msgs
    // socket.on("event", data => {
        // you have data now
        // you then do something with the data
        // in here, you can also emit after the "something" has been done with data
    // })
    socket.emit('tsks', tasks)
    socket.on('send_message', incomingMessage => {
        // console.log('incumming msg: ', incomingMessage)
        messages.push(incomingMessage);
        socket.emit('msgs', messages)

    })
socket.on('send_tasks', incomingTask => {
    tasks.push(incomingTask);
    socket.emit('tsks', tasks)
})

    socket.on("disconnect", () => { // disconnect = user closes browser or loses web connection
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

app.post('/api/createTask', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.createTasks(req.body.tasksSubject, req.body.userId, req.body.tasksBody).then((resp) => {
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
.catch(err => {
    console.log('Error connecting to DB: ', err)
})