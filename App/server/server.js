const express = require('express');
const app = express();


app.get("/api/mockdata", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({'status': 'working', 'testing' : true});
})


app.listen('4573', () => {
    console.log("PORT 4573 listening");
})