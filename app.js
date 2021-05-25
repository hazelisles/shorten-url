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
  res.render('index')
})

app.post('/shorten', async (req, res) => {
  const existData = await urlData.find().lean()
  const { url } = req.body
  const check1 = existData.find(s => s.url === url)
  if (check1) {
    return res.render('index', { data: check1 })
  } else {
    let check = true
    let code = randomCode()
    while (check) {
      const check2 = existData.some(s => s.url_short.substr(s.url_short.length-5, 5) === code)
      if (check2) {
        code = randomCode()
      } else if (!check2) {
        check = false
      }
    }
    const short = {url_short: `https://young-dawn-29170.herokuapp.com/${code}`}
    const data = Object.assign({}, req.body, short)
    urlData.create(data)
    return res.render('index', { data })
  } 
})

app.get('/:code', async (req, res) => {
  const { code } = req.params
  const target = await urlData.find({ "url_short" : { $regex : new RegExp(`${code}` + '$') }}).lean()
  if (target.length === 0) {
    return res.redirect('/')
  } else {
    const { url } = target[0]
    return res.redirect(`${url}`)
  }  
})

app.listen(PORT, (req, res) => {
  console.log(`App start listening on ${PORT}`)
})