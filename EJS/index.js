const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');


app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get( '/',(req,res) => {
    res.send('home')
})

app.get('/random', (req,res) => {
    const randomNum = Math.floor(Math.random()*101)+1
    const newNum = 5
    res.render('random', {randomNum, newNum})
});

app.get('/dogs', (req,res) => {
   const dogs = ['badi', 'aga', 'lui', 'dzeki']
    res.render('dogs', {dogs})
});


app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit]
   if(data) {
    res.render('subreddit', {...data})
   }else {
    res.render('notfound', {subreddit})
   }
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