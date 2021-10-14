var express= require('express');

const app= express();

app.get('/pituco', (req,res)=> {res.send(`<h1>PITUCO</h1>`)})

app.listen(process.env.PORT || 3000, () => console.log('Servidor corriendo en el puerto 3000'));