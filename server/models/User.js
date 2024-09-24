const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    role : {
        type : String,
        default : "user"
    },
    password: {
        type: String,
        required: true,
    },
    services: {
        type: [String],
        default: [],
    },
});

module.exports = mongoose.model('User', UserSchema);