const express = require('express')
const path = require('path')
const index = require('./routes/index.js')

// create app.. may need to add configuration later ie: module.exports = ({ config, stats, log, grpcClient }, cb) => {..}
const app = express()

// express settings for SSR
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Get requests
app.get('/', index.get)

// Start server
app.listen(3000, () => {})
