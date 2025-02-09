// const express= require('express');
// var cors = require('cors')
// const app = express();
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000)

const express = require("express");
var cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3030;


app.get('/',(req,res)=>{
    res.send('husseinnn');
})
app.get('/students',(req,res)=>{
    let data=[{id:7,name:'ziad'},{id:10,name:'jouj'},{id:350,name:'zouz'},]
    res.send(data);
})
// your
// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});