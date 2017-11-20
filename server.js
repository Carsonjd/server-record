const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
let port = process.env.PORT || 3000

app.disable('x-powered-by')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('homepage'))

app.get('/api', (req,res,next) => {
  res.status(200).send({message:"hello there"})
})

app.use((err,req,res,next) => {
  res.status(404).send({error:{message: "error, not found"}})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
