require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))


app.get('/', (req, res) => {
   res.render('users/index.pug')
})

app.listen(PORT, console.log(`Server is running on port ${PORT}`))