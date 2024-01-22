const express = require('express');
const app = express();
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const path = require("path")

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (req, res) => {
    res.send("Hi, I'm Root route");
});

app.get('/home', (req, res) => {
    res.render("routes/home.ejs");
});

app.listen(4090, () => {
    console.log("Server is connected to localhost:4090 successfully!")
})