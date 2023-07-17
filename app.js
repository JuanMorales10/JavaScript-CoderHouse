const express = require('express');
const app = express();
const path = require('path');
const ruta = path.resolve(__dirname,'./public')

app.use(express.static(ruta))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/views/index.html'))
})

app.listen(3050,()=>{
    console.log('Servidor andando en puerto 3050')
})