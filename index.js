var express = require('express');
var app = express();

const servestatic = require('serve-static');

app.use(servestatic(__dirname + "/public"));

// "/" is to add in http://localhost:3001/login
app.get("/", (req, res) => {
    res.sendFile("/public/index.html", { root: __dirname });
});


app.get("/listings", (req, res) => {
    res.sendFile("/public/listings.html", { root: __dirname });
});

// "/" is to add in http://localhost:3001/login
app.get("/users/", (req, res) => {
    res.sendFile("/public/users.html", { root: __dirname });
});






const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Client server has started listening on port ${PORT}`);
});




