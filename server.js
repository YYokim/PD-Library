const express = require('express')
const app = express()

const Accroutes = require('./routes/api/AccountRecords.js');


app.use(express.json({ extended: false}));

app.use('/AccountRecords', Accroutes);

app.get('/',(req, res)=>{
res.send('run api run');})

const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));