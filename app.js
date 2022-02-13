const fs = require('fs');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    const data = fs.readFileSync('test.txt','utf-8')
    console.log(data);
    
    res.send(data)
  })


app.listen(3000, ()=>{
    console.log('server is running on port 3000');
    
})