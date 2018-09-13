const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const User = module.exports = mongoose.model('User', UserSchema, 'user');

module.exports.allUser = function(callback){
    User.find(callback);
}

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
       bcrypt.hash(newUser.password, salt, function (err, hash) {
           if(err) throw err;
           newUser.password = hash;
           newUser.save(callback);
       });
    });
}

module.exports.username = function (userName, callback) {
    User.count({username: userName.username}, callback);
}

module.exports.getByUsername = function (userName, callback) {
    const query = {username: userName};
    User.findOne(query, callback);
}

module.exports.getUserById = function (id, callback) {
    User.findOne({_id: id}, callback);
}

module.exports.comparePassword = function (password, hash, callback) {
    bcrypt.compare(password, hash, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}
