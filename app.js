// Imports
const express = require()
const app = express()
const port = process.env.PORT || 5501


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'assets/css'))
app.use('/js', express.static(__dirname + 'assets/js'))
app.use('/img', express.static(__dirname + 'images'))