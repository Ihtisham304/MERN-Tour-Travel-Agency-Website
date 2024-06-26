
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token:{
        type: String,
        required: true
    }
});

const User = mongoose.model('user',userSchema);


module.exports = User;