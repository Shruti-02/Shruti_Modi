const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 30000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})


app.post("/",(req, res) => {
    //console.log(req.body.num1)
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1+n2;
        res.send("Your answer is "+result);  
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
