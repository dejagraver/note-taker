const express = require("express");


//creating express' server
const app = express();

//instantiate server and tell it to listen for a request 
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// api and HTML routes 
const APIroutes = require('./routes/APIroutes.js');
const HTMLroutes = require('./routes/HTMLroutes.js');
app.use('/', APIroutes);
app.use('/', HTMLroutes);

//listen for the PORT
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});