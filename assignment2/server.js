const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const { MONGODB_URI } = process.env;


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/blog-posts', blogRoutes);
app.use('/api/search', searchRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
