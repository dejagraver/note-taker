//creating express' server
const express = require("express");
const app = express();

//instantiate server and tell it to listen for a request 
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// api and HTML routes 
const APIrouter = require('./routes/APIroutes');
const HTMLrouter = require('./routes/HTMLroutes');
app.use('/api', APIrouter);
app.use('/', HTMLrouter);

//listen for the PORT
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});