const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Userschema = new Schema({
    email: {
        type: String,
        required: true, 
    },
    password: {
        type: String, 
        required: true
    }, 
    fullName: {
        type: String, 
        required:true
    }, 
    createdAt: {
        type: String, 
        required: true
    },
});



const User = mongoose.model('User', Userschema)
module.exports = User; 