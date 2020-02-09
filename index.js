/*
=================================
Class: 1B06

Admission Number: 1949913

Name: Ho Yean Kit
=================================
 */

var express = require('express');
var app = express();

const servestatic = require('serve-static');

app.use(servestatic(__dirname + "/public"));

// "/" is to add in http://localhost:3001/login


// login page
app.get("/login", (req, res) => {
    res.sendFile("/public/index.html", { root: __dirname });
});


// listing page
app.get("/listings", (req, res) => {
    res.sendFile("/public/listings.html", { root: __dirname });
});

// sell page
app.get("/selling", (req, res) => {
    res.sendFile("/public/sell.html", { root: __dirname });
});


// search page
app.get("/search/", (req, res) => {
    res.sendFile("/public/search.html", { root: __dirname });
});

// profile page
app.get("/profile/", (req, res) => {
    res.sendFile("/public/profile.html", { root: __dirname });
});






const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Client server has started listening on port ${PORT}`);
});




