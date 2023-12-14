require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes'); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Social Network API!');
});

app.use('/api', userRoutes);
app.use('/api', thoughtRoutes); 

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
