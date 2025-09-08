//express app that servers html file
//run this app using below command
// node --env-file=.env app.js

var express = require('express');
// var path = require('path');
var app = express();
app.set('view engine', 'ejs');

const URL = process.env.backend || 'http://localhost:9000/api';

const fetch = (...args) => 
    import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get('/', async function(req, res) {
    
    const options = { method: 'GET' };

    fetch(URL, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    try {
        let response = await fetch(URL,options);
        response = await response.json();
        res.render('index',response);
        
    } catch (err) {
      
        console.error('error:' + err);
        res.status(500).send('Error fetching data');
    }
}); 


app.listen(3000, function() {
    console.log('Server running on port ' + 3000);
});     


//fetch request from node js



