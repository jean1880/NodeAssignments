/**
 * Main node app, parses a csv file and returns as a JSON object
 * @author Jean-Luc Desroches
 * @class Main
 **/
var http = require('http');
var fs = require('fs');

// define variables
const PORT = 8080;
var csvFileName = "data/data.csv";

/**
 * Handles all url route requests
 * @method handleRequest
 * @param {Object} HTTP Request object
 * @param {object} HTTP Response object
 **/
var handleRequest = function (request, response) {
    // read specified file
    fs.readFile(csvFileName, function (err, csvString) {
        // if an error is detected, throw the error
        if (err) {
            throw err;
        }

        var json = [];
        var csvArray = csvString.toString().split("\n");

        // for each row in the csv file, parse the key and value
        csvArray.forEach(function (csvRowString) {

            var csvRow = csvRowString.split(",");

            // Here we work on a single row.
            jsonRow = new Object();
            for (var i = 0; i < csvRow.length; i = i + 2) {
                jsonRow[csvRow[i]] = csvRow[i + 1];
            }
            // push new json object into json array
            json.push(jsonRow);
        });

        // set response header to success and specify as type json, then write data
        response.writeHead(200, {
            "Content-Type": "application/json"
        });
        response.write(JSON.stringify(json, null, 2));
    });
}


//Create server
var server = http.createServer(handleRequest);

// start server
server.listen(PORT, function () {
    //Callback triggered when server is successfully listening
    console.log("Server listening on: http://localhost:%s", PORT);
});