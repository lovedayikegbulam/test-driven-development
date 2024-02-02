const express = require('express')
const app = express()
const localhost = "localhost"
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server running at http://${localhost}:${port}/`);
})