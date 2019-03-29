const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000

app.use(morgan('dev')); //logging middleware
app.use(express.static(path.join(__dirname, '..', 'public'))) // static file-serving middleware
app.use(express.urlencoded({ extended: true })); //body parsing
app.use(express.json()) //body parsing

//all initial requests load the html page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  });

app.get('/df', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public/views/directFriendly.html'))
})

app.get('/dfIAB', (req,res) => {
  res.sendFile(path.join(__dirname, '..', 'public/views/directIABFriendly.html'))
})

app.get('/pixalate', (req,res) => {
  res.sendFile(path.join(__dirname, '..', 'public/views/directFriendlyPixalate.html'))
})

app.get('/safeframe', (req,res) => {
  res.sendFile(path.join(__dirname, '..', 'public/views/directIABSafeFrame.html'))
})

app.get('/safeframeMulti', (req,res) => {
  res.sendFile(path.join(__dirname, '..', 'public/views/directIABSafeFrameMulti.html'))
})

app.get('/safeframeBTF', (req,res) => {
  res.sendFile(path.join(__dirname, '..', 'public/views/directIABSafeFrameBTF.html'))
})

//500 error handling
app.use(function (err, req, res, next) {
    console.error(err)
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  });

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

module.exports = app
