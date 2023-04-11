// Import necessary modules
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // for working with JSON Web Tokens
const secretKey = 'yourSecretKey'; // replace with your own secret key for JWT

// Create an express app
const app = express();

// Define the port for the server
const port = 5000;

// Enable CORS middleware
app.use(cors());

// Serve static files from the client/build directory
app.use(express.static('./client/build/'));
app.use('/', express.static('./client/build/index.html'));

// Enable session management middleware
app.use(session({
    secret: 'your-secret-key', // Replace with your own secret key
    resave: false,
    saveUninitialized: true
}));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/api/quote', cors(), (req, res) => {
    const quote = [
        'sample',
        'sample2',
        'sample3',
        'sample4',
        'sample5',
        'sample6',
        'sample7'
    ]
    
    res.json(quote)
})

// Define a route for handling login
app.post('/api/login', cors(), (req, res) => {
    // Perform login logic and set session data if login is successful
    const username = req.body.username;
    const password = req.body.password;
    // Replace with your own login logic here
    if (username === 'example' && password === 'password') {
        req.session.isSignedIn = true; // Set session data
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Define a route for handling logout
app.post('/api/logout', cors(), (req, res) => {
    // Perform logout logic and clear session data
    req.session.isSignedIn = false; // Clear session data
    res.json({ success: true });
});

// Define a route for fetching sign-in status
app.get('/api/signin-status', cors(), (req, res) => {
    // Check if the user is logged in by checking the token in the request headers
    const token = req.headers['authorization'];
    if (token) {
        // Verify and decode the JWT token
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                // If the token is invalid or expired, return an error response
                return res.status(401).json({ error: 'Invalid token' });
            } else {
                // If the token is valid, return a success response with the decoded payload
                return res.json({ loggedIn: true, user: decoded });
            }
        });
    } else {
        // If no token is present, return a success response with loggedIn set to false
        return res.json({ loggedIn: false });
    }
});

app.listen(port, () => {
    console.log(`EX app listening at localhost:${port}`)
})