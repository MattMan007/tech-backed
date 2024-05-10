const express = require('express')
const app = express()
const port = 3000
var counter = 0
var finale = 0

var cors = require('cors');

app.use(cors({origin: ['http://localhost:5177','https://platformatech.netlify.app/']}));


app.get('/count', (req, res) => {
    counter = counter + 1;
    console.log(counter);
    res.send({'counter': counter});
})

app.get('/finalizare', (req, res) => {
    finale = finale + 1;
    console.log(finale);
    res.send({'finalizare': finale});
})

app.get('/hw', (req, res) => {
    res.send('Hello World!');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})