const express = require('express');
const phones = require('./phones.json');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("welcome")
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id);
    res.send(phone)
})



app.listen(port);