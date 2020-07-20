const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const ejs = require( 'ejs' );
const https = require( 'https' );
const User = require('../chartjs-mongodb/Chart.Js-MongoDB-nodejs/models/User');

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
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    var jsonData = JSON.stringify( data );

    const url = 'https://us10.api.mailchimp.com/3.0/lists/3bcaecddd8';
    const options = {
        method: "POST",
        auth: "john:9e1c4d779ff7ccbffb8621ccf1ed12d6-us10"
    }

    const request = https.request( url, options, function( response ) {

        if ( response.statusCode === 200 ) {
            res.sendFile( __dirname + '/success.html' );
        } else {
            res.sendFile( __dirname + '/failure.html' );
        }

        response.on( 'data', function( data ) {
            //console.log( JSON.parse( data ) );
        })
    })

    request.write( jsonData );
    request.end();

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


// ----------- API ------------ //
//
// Broad API for REST
app.route( '/form' )

.get( function( req, res ) {
    Form.find( function( err, foundForm ) {
        res.send( foundForm );
    })
})

.post( function( req, res ) {
    // const newForm = new Form({
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     email: req.body.email,
    //     genders: req.body.gender,
    //     deliveryDate: req.body.deliveryDate,
    //     name1: req.body.nameSuggestion1,
    //     name2: req.body.nameSuggestion2,
    //     name3: req.body.nameSuggestion3
    // })

    // newForm.save( function( err ) {
    //     if ( !err ) {
    //         res.send( 'Successfully added a new form object' );
    //     } else {
    //         res.send( err );
    //     }
    // })
})

.delete( function( req, res ) {
    Form.deleteMany( function( err ) {
        if ( !err ) {
            res.send( 'Successfully deleted all articles.' );
        } else {
            res.send( err );
        }
    })
})

// Individual API for REST
app.route( '/form/:formID' )

.get( function( req, res ) {
    Form.findOne(
        { _id: req.params.formID },
        function( err, foundID ) {
            if ( foundID ) {
                res.send( foundID );
            } else {
                res.send( 'No form matching that ID were found' );
                res.status( 404 );
            }
        }
    )
})

.put( function( req, res ) {
    Form.update(
        { _id: req.body.firstName },
        { _id: req.body.lastName },
        { _id: req.body.email },
        { _id: req.body.gender },
        { _id: req.body.deliveryDate },
        { _id: req.body.name1 },
        { _id: req.body.name2 },
        { _id: req.body.name3 },
        { overwrite: true },
        function( err ) {
            if ( !err ) {
                res.send( 'Successfully updated article.' );
            }
        }

    )
})

.patch( function( req, res ) {
    console.log( 'Patching is not setup at this time' );
})

.delete( function( req, res ) {
    Form.deleteOne(
        { _id: req.params.formID },
        function( err ) {
            if ( !err ) {
                res.send( 'Successfully deleted the corresponding form.' );
            } else {
                res.send( err );
            }
        }
    )
})



// Setup server and port
app.listen( 3000, function() {
    console.log( 'Server running on port 3000' );
})
