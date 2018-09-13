const express = require('express');
const User = require('../models/user');
const config = require('../config/database');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/', function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    User.getByUsername(username, function (err, user) {
        if(err) throw err;
        if (!user){
            return res.json({success: false, msg: 'User not found.'})
        }

        User.comparePassword(password, user.password, function (err, isMatch) {
            if (err) throw err;
            if (isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                   expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: 'wexik '+token,
                    user: {
                        id: user._id,
                        f_naem: user.f_naem,
                        l_name: user.l_name,
                        email: user.email,
                        username: user.username,
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password!'});
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    res.json({user: req.user});
});

module.exports = router;