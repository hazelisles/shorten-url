const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const exphbs = require('express-handlebars')
const urlData = require('./models/url')
const randomCode = require('./helpers/randomCode')
require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(randomCode())
  res.render('index')
})

app.post('/', (req, res) => {
  const { url } = req.body
  res.render('index')
})

app.get('縮網址/:code', (req, res) => {
  搜尋對應資料庫_id導引回原網址
})

app.listen(PORT, (req, res) => {
  console.log(`App start listening on ${PORT}`)
})