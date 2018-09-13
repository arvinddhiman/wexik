const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./server/config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error '+err);
});

const app = express();
const register = require('./server/routes/register');
const login = require('./server/routes/login');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'dist/wexik'), { redirect: false }));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./server/config/passport')(passport);

app.use('/register', register);
app.use('/login', login);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/wexik/index.html'));
});

// Start Server
var server = app.listen(port, function () {
    console.log('Server started on port '+ port);
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("Connected with "+socket.id);

    socket.on('disconnect', function () {
        console.log("Disconnect with "+socket.id);
    });
});