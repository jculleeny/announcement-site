const { request } = require("express");

const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const https = require( 'https' );

const app = express();

// Send index.html
app.get( '/', function( req, res ) {
    res.sendFile( __dirname + '/index.html' );
})

// Setup bodyParser to work
app.use( bodyParser.urlencoded( { extended: true } ) );

// Setup public files
app.use( express.static( 'public' ) );

// Setup server and port
app.listen( 3000, function() {
    console.log( 'Server running on port 3000' );
})