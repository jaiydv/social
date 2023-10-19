const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://0.0.0.0:27017/jai');

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log("error aa gya mongo mein"); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});  