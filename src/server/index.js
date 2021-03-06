const express = require('express'),
      app = express(),
      serveStatic = require('serve-static'),
      bodyParser = require('body-parser'),
      path = require('path'),
      db = require('./database-handler')

app.use(bodyParser.json())

const baseDir = path.dirname(__dirname)
app.use('/node_modules', serveStatic(path.join(baseDir, '../node_modules')))
app.use('/', serveStatic(baseDir))

// http://localhost:3000/customer/00-00-00-00-00
app.get('/customer/:rfid', (req, res) => {
  let rfid = req.params.rfid
  db.open()
  db.getCustomer(rfid, (customer) => {
    res.send(customer.toString())
    db.close()
  })
})

app.get('/tags/:customer', (req, res) => {
  let customer = req.params.customer
  db.open()
  db.getTags(customer, (tags) => {
    res.send(tags)
    db.close()
  })
})

app.get('/disposals/:customer', (req, res) => {
  let customer = req.params.customer
  db.open()
  db.getDisposals(customer, (disposals) => {
    res.send(disposals)
    db.close()
  })
})

app.get('/disposals/:customer/:startDate/:endDate', (req, res) => {
  let customer = req.params.customer
  let startDate = req.params.startDate
  let endDate = req.params.endDate
  db.open()
  db.getDisposalsByDate(customer, startDate, endDate, (disposals) => {
    res.send(disposals)
    db.close()
  })
})

app.get('/disposals/:customer/:fraction', (req, res) => {
  let customer = req.params.customer
  let fraction = req.params.fraction
  db.open()
  db.getDisposalsByFraction(customer, fraction, (disposals) => {
    res.send(disposals)
    db.close()
  })
})

app.use((req, res) => {
  res.sendFile(path.join(baseDir, "index.html"))
})

app.listen(3000, console.log.bind(console, 'Server is running'))
