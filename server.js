const express = require('express')
const path=require('path')
const timer=require('./middleware/timer')

const app = express()
app.use(timer);

app.use(express.static(path.join(__dirname,'public')))
 const PORT=3000

app.listen(PORT,(err)=>{
    if(err){throw err}
    else{console.log(`Server connected ... ${PORT}`)}
});