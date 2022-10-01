const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./routes/authRoutes.js');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(cors({origin: "http://localhost:3000", credentials: true}));

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log(error);
});



// Processing requests using the routes
app.use(routes);


app.listen('4573', () => {
    console.log("PORT 4573 listening");
});