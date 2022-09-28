const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./routes/authRoutes.js');
const app = express();


//middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());




// app.get("/api/mockdata", (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     res.json({'status': 'working', 'testing' : true});
// });


// Processing requests using the routes
app.use(routes);


app.listen('4573', () => {
    console.log("PORT 4573 listening");
});