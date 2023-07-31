const express = require('express');
const routes = require('./routes/index')
const connectDB = require('./db/dbConnect');
const startServer = require('./server/server');

const app = express();
app.use(routes)

// Database And Server 
connectDB()
startServer(app)
