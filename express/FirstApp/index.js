const express = require('express');
const app = express();

// app.use((req, res) => {
//    res.send('<h1> Zeeks preuzimam </h1>')
// })


app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params
    res.send(`browsing ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params
    res.send(`browsing postId ${postId} of  ${subreddit} subreddit`)
})
app.get('/cats', (req, res) => {
    res.send('cats')
})

app.get('/dogs', (req, res) => {
    res.send('<h1>here are the dogs</h1>')
})


app.get('/search', (req,res) => {
   
    const {q} = req.query;
    if(!q) {
        res.send('Noting searched')
    }
    res.send(`<h1> We are searching for:  ${q}`)
} )



app.get('*', (req, res) => {
    res.send('Error path 4004')
})



app.listen(3000, ()=> {
    console.log('port 3000')
})