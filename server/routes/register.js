const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', function (req, res, next) {
    let newUser = new User({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, function (err, user) {
        if(err){
            res.json({success: false, msg:'Failed to register user.', err: err});
        } else {
            res.json({success: true, msg:'User registered.'});
        }
    });
});

router.post('/username', function (req, res, next) {

    let userName = new User({
        username: req.body.username
    });

    User.username(userName, function (err, user) {
        if(err){
            res.json({success: false, msg:'Something Wrong!', err: err});
        } else {
            res.json({success: true, result: user});
        }
    });
})

router.get('/arvind', function (req, res) {

    User.allUser(function (err, ar) {
        res.json(ar);
    })
});

module.exports = router;