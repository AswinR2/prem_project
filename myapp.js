var express = require('express');
var path = require('path');
var app = express();

var mysql = require('mysql')
var connection = require('./dbConfig');

app.set('view engine', 'ejs'),

app.use('/public',express.static('public'));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.render("premier_league");
});

app.get('/clubs', function(req, res) {
    connection.query("SELECT * FROM clubs ORDER BY rank", function (err, result) {
        if (err) throw err;
        console.log(result);
        res.render('Clubs', {title: 'xyz', userData: result});
        });
    });

app.get('/players', function(req, res) {
    connection.query("SELECT * FROM players ORDER BY club_ID,position", function (err, result){
        if (err) throw err;
        console.log(result);
        res.render('players', {title:'xyz', userData: result});
        });
    });

app.get('/index', function (req, res) {
    if (err) throw err;
    console.log
    res.render('premier_league',{title: 'xyz', userData: result});
})


app.listen(process.env.port || 3500);
console.log('Running at port 3500');