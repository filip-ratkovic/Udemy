const express = require('express');
const app = express();
const path = require('path');
const { ppid } = require('process');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get( '/',(req,res) => {
    res.render('home')
})

app.get('/random', (req,res) => {
    const randomNum = Math.floor(Math.random()*101)+1
    const newNum = 5
    res.render('random', {randomNum, newNum})
});

app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit})
})

app.get('/search', (req,res) => {
   
    const {q} = req.query;
    if(!q) {
        res.send('Noting searched')
    }
    res.send(`<h1> We are searching for:  ${q}`, q={q})
} )

app.listen('3000', () => {

});