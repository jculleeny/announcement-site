const mongoose = require( 'mongoose' );

// Mongoose Schema
const formSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    email: String,
    genders: String,
    deliveryDate: Date,
    name1: String,
    name2: String,
    name3: String
})

module.exports = mongoose.model( 'Form', formSchema );