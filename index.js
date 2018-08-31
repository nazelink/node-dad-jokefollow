var chalk = require('chalk')
var request = require('request')

var options = {
    url: 'https://icanhazdadjoke.com/',
    headers: {
        accept: 'application/json'
    }
}

var responseHandler = function( error, response, body ) {
    var jokeResponse = JSON.parse( body )
    var joke = jokeResponse.joke

    console.log( chalk.yellow.bgBlue( joke))
}

request( options, responseHandler)