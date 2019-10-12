const express = require('express');
// easy way to interact with MongoDB
const mongoose = require('mongoose');
// mongoose.set('useFindAndModify', false);
// takes requests and get data from the body
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Conneced...'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/items', items); 

const port = process.env.PORT || 5000;
    
app.listen(port, () => console.log(`Server started on port ${port}`));