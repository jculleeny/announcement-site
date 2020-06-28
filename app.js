const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const ejs = require( 'ejs' );

// Create Express App
const app = express();
// set view engine EJS
app.set( 'view engine', 'ejs' );
// Setup Body Parser and our Public Static folder
app.use( bodyParser.urlencoded( {extended: true } ) );
app.use( express.static( 'public' ) );

// Setup the MongoDB Database using mongoose
mongoose.connect( 'mongodb://localhost:27017/twinsDB', { useNewUrlParser: true, useUnifiedTopology: true } );

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

const Form = mongoose.model( 'Form', formSchema );

// Send index.ejs
app.get( '/', function( req, res ) {
    res.render( 'index' );
})

app.post( '/', function( req, res) {
    const form = new Form({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        genders: req.body.gender,
        deliveryDate: req.body.deliveryDate,
        name1: req.body.nameSuggestion1,
        name2: req.body.nameSuggestion2,
        name3: req.body.nameSuggestion3
    })
    
    console.log( form );
    form.save( function( err ) {
        if ( !err ) {
            res.redirect( '/submitted' );
        }
    })

})

app.get( '/submitted', function( req, res ) {


    res.render( 'submitted' );
} )

// Setup server and port
app.listen( 3000, function() {
    console.log( 'Server running on port 3000' );
})
