const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Rentalschema = new Schema({
    uid: {
        type: String, 
        required: true
    }, 
    title: {
        type: String, 
        required: true, 
    }, 
    desc: { 
        type: String, 
        required: true
    }, 
    price: {
        type: Number, 
        required: true, 
    }, 
    street: {
        type: String, 
        required: true, 
    }, 
    city: {
        type: String, 
        required: true, 
    },
    state: {
        type: String, 
        required: true, 
    },
    zip: {
        type: String, 
        required: true, 
    },
    cood: {
        type: Object,
    },
    availableDate: {
        type: String, 
        required: true, 
    },
    bedroom:{
        type: String, 
        required: true,
    }, 
    user: {
        type: Object,
        required: true
    }, 
    images: {
        type: Array,
    },
    createdAt: {
        type: String, 
        required: true
    },
});


const Postrental = mongoose.model('Postrental', Rentalschema)
module.exports = Postrental; 

