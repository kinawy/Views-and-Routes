const express = require('express');
const app = express();

// // Gets home page

// app.get('/', (req, res) => {
//     res.send('This is the home page!')
// })

// // Gets about page

// app.get('/about', (req, res) => {
//     res.send('Some stuff about me would go here but I dont wanna')
// })

// // Gets blog page

// app.get('/blog', (req, res) => {
//     res.send('A directory of all my blog posts will go here but I dont blog!')
// })

// Gets home page

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html')
})

// Gets about page

app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/views/about.html')
})

// Gets blog page

app.get('/blog', (req, res) => {
    res.sendFile(__dirname+'/views/blog-directory.html')
})



// Listens to port 8000

app.listen(8000, () => {
    console.log('This works')
})