// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set static directory
app.use(express.static('public'));

// Create array of comments
let comments = [
    {name: 'John', message: 'Hello'},
    {name: 'Mary', message: 'Hi, John'},
    {name: 'Sue', message: 'What\'s up?'}
];

// Respond to GET request to root
app.get('/', (req, res) => {
    res.render('index', {comments: comments});
});

// Respond to POST request to root
app.post('/', (req, res) => {
    // Add new comment to array
    comments.push({name: req.body.name, message: req.body.message});
    // Redirect to root
    res.redirect('/');
});

// Listen on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
