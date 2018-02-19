const express = require('express')
const path = require('path')
const exphbs  = require('express-handlebars')
const bodyParser = require('body-parser')
const Telegraf = require('telegraf')
const config = require('./config')
const bot = new Telegraf(config.TELEGRAM.apikey)


const app = express()

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars')

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome'
  res.render('index', {
    title: title
  })
})

//About Route
app.get('/tnx', (req, res) => {
	res.render('tnx')
})

//Send message to telegram
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/', function(req, res) {
  const optionalParams = {parse_mode: 'HTML'}
  bot.telegram.sendMessage(config.TELEGRAM.userid, `Заявка с сайта!
<b>ФИО:</b> ${req.body.firstname}
<b>Телефон:</b> ${req.body.telephone}
<b>Email:</b> ${req.body.email}
<b>Промокод:</b> ${req.body.promo}`, optionalParams)
  res.render('tnx')
})

//If bot error
bot.catch((err) => {
  console.log('Ooops', err)
})

const port = 4000

app.listen(port, () =>{
  console.log(`Server started on port ${port}`)
})